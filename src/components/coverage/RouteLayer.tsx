import type { OffensiveRoute, ReceiverKey, RouteType } from '../../data/types';

interface Props {
  routes: OffensiveRoute[];
}

// SVG dimensions match CoverageDiagram
const W = 500;
const H = 340;
const LOS_Y_PCT = 55; // LOS at 55% of height — offense below, defense above

function toX(pct: number) { return (pct / 100) * W; }
function toY(pct: number) { return (pct / 100) * H; }

// Fixed receiver starting positions (% coords, below LOS which is at y=55%)
const RECEIVER_STARTS: Record<ReceiverKey, { x: number; y: number }> = {
  wr1:  { x: 6,  y: LOS_Y_PCT + 5 },   // left outside WR
  wr2:  { x: 94, y: LOS_Y_PCT + 5 },   // right outside WR
  slot: { x: 28, y: LOS_Y_PCT + 5 },   // left slot
  te:   { x: 36, y: LOS_Y_PCT + 3 },   // tight end
  rb:   { x: 52, y: LOS_Y_PCT + 4 },   // running back
};

// Determine if a receiver is on the left or right side of the field
function isLeftSide(key: ReceiverKey): boolean {
  return key === 'wr1' || key === 'slot';
}

// Direction multiplier toward field center (+1 for left-side, -1 for right-side)
function insideDir(key: ReceiverKey): number {
  return isLeftSide(key) ? 1 : -1;
}

// Direction multiplier toward sideline (-1 for left-side, +1 for right-side)
function outsideDir(key: ReceiverKey): number {
  return isLeftSide(key) ? -1 : 1;
}

type Waypoint = { x: number; y: number };

function getRouteWaypoints(key: ReceiverKey, routeType: RouteType): Waypoint[] {
  const s = RECEIVER_STARTS[key];
  const inDir = insideDir(key);
  const outDir = outsideDir(key);

  switch (routeType) {
    case 'go':
      return [s, { x: s.x, y: 16 }];

    case 'post':
      return [s, { x: s.x, y: 32 }, { x: s.x + inDir * 22, y: 18 }];

    case 'corner':
      return [s, { x: s.x, y: 32 }, { x: s.x + outDir * 8, y: 20 }];

    case 'dig':
      return [s, { x: s.x, y: 32 }, { x: 50 + inDir * 5, y: 32 }];

    case 'slant':
      return [s, { x: s.x + inDir * 18, y: 43 }];

    case 'crossing':
      // Crosses the full field at intermediate depth
      return [s, { x: isLeftSide(key) ? 78 : 22, y: 42 }];

    case 'seam':
      // Straight vertical (TE/slot) up the seam
      return [s, { x: s.x, y: 16 }];

    case 'flat':
      // Short lateral outside
      return [s, { x: s.x + outDir * 12, y: LOS_Y_PCT - 3 }];

    case 'bubble':
      // Immediate lateral catch
      return [s, { x: s.x + outDir * 10, y: LOS_Y_PCT }];

    case 'curl':
      // Up then curl back toward QB
      return [s, { x: s.x, y: 32 }, { x: s.x + inDir * 4, y: 38 }];

    case 'wheel':
      // RB flat then up the sideline
      return [s, { x: s.x + outDir * 12, y: LOS_Y_PCT - 2 }, { x: s.x + outDir * 16, y: 18 }];

    case 'mesh':
      // Short cross just past the LOS
      return [s, { x: isLeftSide(key) ? s.x + 22 : s.x - 22, y: 47 }];

    default:
      return [s, { x: s.x, y: 20 }];
  }
}

// Build an SVG path string from waypoints using smooth quadratic bezier curves
function buildPath(waypoints: Waypoint[]): string {
  if (waypoints.length < 2) return '';
  const pts = waypoints.map(p => ({ x: toX(p.x), y: toY(p.y) }));

  if (pts.length === 2) {
    return `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y}`;
  }

  // For 3 waypoints: line to midpoint then quadratic bezier through the corner
  if (pts.length === 3) {
    // Run straight to midway between p1 and p2, then curve through p2 to p3
    const mid12x = (pts[0].x + pts[1].x) / 2;
    const mid12y = (pts[0].y + pts[1].y) / 2;
    return `M ${pts[0].x} ${pts[0].y} L ${mid12x} ${mid12y} Q ${pts[1].x} ${pts[1].y} ${pts[2].x} ${pts[2].y}`;
  }

  // Fallback: polyline
  return `M ${pts[0].x} ${pts[0].y} ` + pts.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');
}

function getRouteLabel(route: OffensiveRoute): string {
  if (route.label) return route.label;
  const labels: Record<RouteType, string> = {
    go: 'Go', post: 'Post', corner: 'Corner', dig: 'Dig', slant: 'Slant',
    crossing: 'Cross', seam: 'Seam', flat: 'Flat', bubble: 'Bubble',
    curl: 'Curl', wheel: 'Wheel', mesh: 'Mesh',
  };
  return labels[route.routeType] ?? route.routeType;
}

interface RoutePathProps {
  route: OffensiveRoute;
  markerId: string;
  markerIdSecondary: string;
}

function RoutePath({ route, markerId, markerIdSecondary }: RoutePathProps) {
  const waypoints = getRouteWaypoints(route.receiverKey, route.routeType);
  const pathD = buildPath(waypoints);
  const endPt = waypoints[waypoints.length - 1];
  const endX = toX(endPt.x);
  const endY = toY(endPt.y);
  const label = getRouteLabel(route);

  const isPrimary = route.isPrimary;
  const stroke = isPrimary ? '#fbbf24' : '#94a3b8';
  const strokeWidth = isPrimary ? 2.5 : 1.5;
  const opacity = isPrimary ? 1 : 0.55;
  const markId = isPrimary ? `url(#${markerId})` : `url(#${markerIdSecondary})`;

  // Label offset: push label slightly away from end of route
  const start = RECEIVER_STARTS[route.receiverKey];
  const dxDir = endPt.x > start.x ? 4 : endPt.x < start.x ? -4 : 0;
  const dyDir = endPt.y < start.y ? -4 : 4; // routes generally go up (y decreases)

  return (
    <g opacity={opacity}>
      <path
        d={pathD}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={markId}
      />
      {isPrimary && (
        <text
          x={endX + dxDir}
          y={endY + dyDir}
          fill={stroke}
          fontSize={9}
          fontWeight="700"
          textAnchor="middle"
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        >
          {label}
        </text>
      )}
    </g>
  );
}

export default function RouteLayer({ routes }: Props) {
  const markerId = `route-arrow-primary-${Math.random().toString(36).slice(2, 7)}`;
  const markerIdSec = `route-arrow-secondary-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <>
      <defs>
        <marker id={markerId} markerWidth={7} markerHeight={5} refX={5} refY={2.5} orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="#fbbf24" />
        </marker>
        <marker id={markerIdSec} markerWidth={6} markerHeight={4} refX={5} refY={2} orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#94a3b8" />
        </marker>
      </defs>
      {/* Secondary routes first (drawn under primary) */}
      {routes.filter(r => !r.isPrimary).map((route, i) => (
        <RoutePath key={`sec-${i}`} route={route} markerId={markerId} markerIdSecondary={markerIdSec} />
      ))}
      {/* Primary route on top */}
      {routes.filter(r => r.isPrimary).map((route, i) => (
        <RoutePath key={`pri-${i}`} route={route} markerId={markerId} markerIdSecondary={markerIdSec} />
      ))}
    </>
  );
}
