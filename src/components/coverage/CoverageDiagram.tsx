import type { DiagramData, PlayerDot, MovementArrow, OffensiveRoute, FormationType } from '../../data/types';
import { FORMATIONS } from '../../data/formations';
import RouteLayer from './RouteLayer';
import './CoverageDiagram.css';

interface Props {
  diagram: DiagramData;
  showZones?: boolean;
  showArrows?: boolean;
  showLabels?: boolean;
  showAnnotations?: boolean;
  offensiveRoutes?: OffensiveRoute[];
  formation?: FormationType;
  size?: 'small' | 'medium' | 'large';
}

const ROLE_COLORS: Record<string, string> = {
  cornerback: '#ef4444',
  safety: '#3b82f6',
  linebacker: '#22c55e',
  nickel: '#f97316',
  dline: '#94a3b8',
  blitzer: '#ef4444',
};

const ZONE_COLORS: Record<string, string> = {
  'deep-half': 'rgba(59, 130, 246, 0.22)',
  'deep-third': 'rgba(59, 130, 246, 0.22)',
  'deep-middle-third': 'rgba(59, 130, 246, 0.22)',
  'deep-quarter': 'rgba(59, 130, 246, 0.22)',
  'deep-seam': 'rgba(139, 92, 246, 0.25)',
  'hook-curl': 'rgba(234, 179, 8, 0.22)',
  'hook': 'rgba(234, 179, 8, 0.22)',
  'curl-flat': 'rgba(234, 179, 8, 0.22)',
  'flat': 'rgba(34, 197, 94, 0.22)',
  'seam': 'rgba(139, 92, 246, 0.22)',
};

const W = 500;
const H = 340;
const LOS_Y = 0.55; // LOS at 55% height — offense below, defense above

function toSvgX(pct: number) { return (pct / 100) * W; }
function toSvgY(pct: number) { return (pct / 100) * H; }

function FieldBackground() {
  return (
    <>
      {/* Grass */}
      <rect x={0} y={0} width={W} height={H} fill="#1a5c2a" />
      {/* Field stripes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={0} y={i * 68} width={W} height={34} fill={i % 2 === 0 ? '#1a5c2a' : '#1d6530'} />
      ))}
      {/* Hash marks */}
      {[30, 40, 50, 60, 70, 80, 90].map((y) => (
        <g key={y}>
          <line x1={155} y1={toSvgY(y)} x2={170} y2={toSvgY(y)} stroke="#fff" strokeWidth={1} opacity={0.4} />
          <line x1={330} y1={toSvgY(y)} x2={345} y2={toSvgY(y)} stroke="#fff" strokeWidth={1} opacity={0.4} />
        </g>
      ))}
      {/* Sidelines */}
      <line x1={8} y1={0} x2={8} y2={H} stroke="#fff" strokeWidth={1} opacity={0.5} />
      <line x1={W - 8} y1={0} x2={W - 8} y2={H} stroke="#fff" strokeWidth={1} opacity={0.5} />
      {/* Line of scrimmage */}
      <line x1={0} y1={toSvgY(LOS_Y * 100)} x2={W} y2={toSvgY(LOS_Y * 100)} stroke="#fff" strokeWidth={2} opacity={0.8} strokeDasharray="8 4" />
      <text x={W - 12} y={toSvgY(LOS_Y * 100) - 4} fill="#fff" fontSize={9} opacity={0.7} textAnchor="end">LOS</text>
      {/* Side labels */}
      <text x={W / 2} y={toSvgY(LOS_Y * 100) - 8} fill="#fff" fontSize={9} opacity={0.5} textAnchor="middle">DEFENSE</text>
      <text x={W / 2} y={toSvgY(LOS_Y * 100) + 14} fill="#fff" fontSize={9} opacity={0.5} textAnchor="middle">OFFENSE ↑</text>
    </>
  );
}

function ZoneShapes({ players, visible }: { players: PlayerDot[]; visible: boolean }) {
  if (!visible) return null;
  return (
    <>
      {players.map((p) => {
        if (!p.coverageZone?.rect) return null;
        const { x, y, width, height } = p.coverageZone.rect;
        const color = ZONE_COLORS[p.coverageZone.type] ?? 'rgba(255,255,255,0.1)';
        return (
          <rect
            key={`zone-${p.id}`}
            x={toSvgX(x)}
            y={toSvgY(y)}
            width={toSvgX(width)}
            height={toSvgY(height)}
            fill={color}
            stroke={color.replace(/[\d.]+\)$/, '0.5)')}
            strokeWidth={1}
          />
        );
      })}
    </>
  );
}

function Arrow({ arrow, players, visible }: { arrow: MovementArrow; players: PlayerDot[]; visible: boolean }) {
  if (!visible) return null;
  const from = players.find((p) => p.id === arrow.fromPlayerId);
  if (!from) return null;
  const x1 = toSvgX(from.x);
  const y1 = toSvgY(from.y);
  const x2 = toSvgX(arrow.toX);
  const y2 = toSvgY(arrow.toY);
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2 + 10;
  const color = arrow.style === 'blitz' ? '#ef4444' : '#fbbf24';
  const dash = arrow.style === 'blitz' ? '6 3' : undefined;
  return (
    <path
      d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeDasharray={dash}
      markerEnd="url(#arrowhead)"
      opacity={0.85}
    />
  );
}

function PlayerDotComponent({ player, showLabel }: { player: PlayerDot; showLabel: boolean }) {
  const cx = toSvgX(player.x);
  const cy = toSvgY(player.y);
  const r = player.role === 'dline' ? 10 : 11;
  const fill = ROLE_COLORS[player.role] ?? '#fff';
  const isBlitz = player.isBlitzing;

  return (
    <g>
      {isBlitz && (
        <circle
          cx={cx}
          cy={cy}
          r={r + 4}
          fill="none"
          stroke="#ef4444"
          strokeWidth={2}
          strokeDasharray="4 3"
          opacity={0.9}
        />
      )}
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#fff" strokeWidth={1.5} opacity={0.95} />
      {showLabel && (
        <text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          fill="#fff"
          fontSize={player.role === 'dline' ? 7 : 8}
          fontWeight="700"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {player.label}
        </text>
      )}
    </g>
  );
}

function OffenseSymbols({ formation = 'standard' }: { formation?: FormationType }) {
  const los = toSvgY(LOS_Y * 100);
  const yOff = los + 16; // OL line y position (just below LOS)
  const op = 0.45; // shared opacity for ghost symbols
  const { receiverStarts } = FORMATIONS[formation];

  // Convert receiver % positions to SVG pixel coords
  const rx = (key: keyof typeof receiverStarts) => toSvgX(receiverStarts[key].x);
  const ry = (key: keyof typeof receiverStarts) => toSvgY(receiverStarts[key].y);

  // OL core: C, G, G, T, T (always the same)
  const olCore = [250, 225, 275, 200, 300];

  function Square({ cx, y = yOff }: { cx: number; y?: number }) {
    return <rect x={cx - 9} y={y - 9} width={18} height={18} fill="none" stroke="#fff" strokeWidth={1.5} opacity={op} />;
  }
  function Dot({ cx, cy }: { cx: number; cy: number }) {
    return <circle cx={cx} cy={cy} r={9} fill="none" stroke="#fff" strokeWidth={1.5} opacity={op} />;
  }

  if (formation === 'standard') {
    return (
      <>
        {olCore.map(x => <Square key={x} cx={x} />)}
        <Square cx={180} />   {/* TE on left OL */}
        <Dot cx={rx('wr1')} cy={ry('wr1')} />
        <Dot cx={rx('wr2')} cy={ry('wr2')} />
        <Dot cx={rx('slot')} cy={ry('slot')} />
        <Dot cx={250} cy={los + 38} />  {/* QB under center */}
      </>
    );
  }

  if (formation === 'trips-right') {
    return (
      <>
        {olCore.map(x => <Square key={x} cx={x} />)}
        <Dot cx={rx('wr1')} cy={ry('wr1')} />      {/* lone WR left */}
        <Dot cx={rx('te')}  cy={ry('te')} />       {/* inner trips */}
        <Dot cx={rx('slot')} cy={ry('slot')} />    {/* middle trips */}
        <Dot cx={rx('wr2')} cy={ry('wr2')} />      {/* outside trips */}
        <Dot cx={250} cy={los + 38} />             {/* QB */}
        <Dot cx={250} cy={los + 55} />             {/* RB behind QB */}
      </>
    );
  }

  if (formation === 'trips-left') {
    return (
      <>
        {olCore.map(x => <Square key={x} cx={x} />)}
        <Dot cx={rx('wr1')} cy={ry('wr1')} />      {/* outside trips left */}
        <Dot cx={rx('slot')} cy={ry('slot')} />    {/* middle trips left */}
        <Dot cx={rx('te')}  cy={ry('te')} />       {/* inner trips left */}
        <Dot cx={rx('wr2')} cy={ry('wr2')} />      {/* lone WR right */}
        <Dot cx={250} cy={los + 38} />             {/* QB */}
        <Dot cx={250} cy={los + 55} />             {/* RB behind QB */}
      </>
    );
  }

  if (formation === 'empty') {
    return (
      <>
        {olCore.map(x => <Square key={x} cx={x} />)}
        <Dot cx={rx('wr1')} cy={ry('wr1')} />      {/* far left */}
        <Dot cx={rx('slot')} cy={ry('slot')} />    {/* left inside */}
        <Dot cx={rx('rb')}   cy={ry('rb')} />      {/* left middle (5th receiver) */}
        <Dot cx={rx('te')}  cy={ry('te')} />       {/* right inside */}
        <Dot cx={rx('wr2')} cy={ry('wr2')} />      {/* far right */}
        <Dot cx={250} cy={los + 55} />             {/* QB shotgun */}
      </>
    );
  }

  // tight (12 personnel): two TEs flanking OL
  return (
    <>
      {olCore.map(x => <Square key={x} cx={x} />)}
      <Square cx={180} />                          {/* TE1 on left OL */}
      <Square cx={320} />                          {/* TE2 on right OL */}
      <Dot cx={rx('wr1')} cy={ry('wr1')} />
      <Dot cx={rx('wr2')} cy={ry('wr2')} />
      <Dot cx={250} cy={los + 38} />               {/* QB under center */}
      <Dot cx={250} cy={los + 62} />               {/* RB deep */}
    </>
  );
}

export default function CoverageDiagram({
  diagram,
  showZones = true,
  showArrows = true,
  showLabels = true,
  showAnnotations = true,
  offensiveRoutes,
  formation,
  size = 'medium',
}: Props) {
  const sizeClass = `diagram--${size}`;

  return (
    <div className={`diagram ${sizeClass}`}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" className="diagram__svg">
        <defs>
          <marker
            id="arrowhead"
            markerWidth={8}
            markerHeight={6}
            refX={6}
            refY={3}
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="#fbbf24" />
          </marker>
        </defs>

        <FieldBackground />
        <OffenseSymbols formation={formation} />
        <ZoneShapes players={diagram.players} visible={showZones} />

        {offensiveRoutes && offensiveRoutes.length > 0 && (
          <RouteLayer routes={offensiveRoutes} formation={formation} />
        )}

        {showArrows && diagram.movementArrows?.map((arrow) => (
          <Arrow key={`${arrow.fromPlayerId}-arrow`} arrow={arrow} players={diagram.players} visible={showArrows} />
        ))}

        {diagram.players.map((p) => (
          <PlayerDotComponent key={p.id} player={p} showLabel={showLabels} />
        ))}

        {showAnnotations && diagram.annotations?.map((ann, i) => (
          <text
            key={i}
            x={toSvgX(ann.x)}
            y={toSvgY(ann.y)}
            textAnchor="middle"
            fill={ann.style === 'warning' ? '#fbbf24' : 'rgba(255,255,255,0.75)'}
            fontSize={ann.style === 'warning' ? 11 : 10}
            fontWeight={ann.style === 'warning' ? '700' : '400'}
          >
            {ann.text}
          </text>
        ))}
      </svg>

      {/* Legend */}
      {size !== 'small' && (
        <div className="diagram__legend">
          <span className="legend-item"><span className="legend-dot" style={{ background: '#ef4444' }} />CB</span>
          <span className="legend-item"><span className="legend-dot" style={{ background: '#3b82f6' }} />S</span>
          <span className="legend-item"><span className="legend-dot" style={{ background: '#22c55e' }} />LB</span>
          <span className="legend-item"><span className="legend-dot" style={{ background: '#f97316' }} />NB</span>
          <span className="legend-item"><span className="legend-dot" style={{ background: '#94a3b8' }} />DL</span>
        </div>
      )}
    </div>
  );
}
