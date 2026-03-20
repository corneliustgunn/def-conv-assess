import type { FormationType, ReceiverKey } from './types';

const LOS = 55; // must match LOS_Y_PCT in RouteLayer.tsx

export interface FormationConfig {
  label: string;
  /** Receiver start positions used for route drawing (% of SVG dimensions) */
  receiverStarts: Record<ReceiverKey, { x: number; y: number }>;
}

export const FORMATIONS: Record<FormationType, FormationConfig> = {
  /** 11 personnel — slot + TE left, WRs wide, RB in backfield */
  standard: {
    label: '11 Personnel',
    receiverStarts: {
      wr1:  { x: 6,  y: LOS + 5 },
      wr2:  { x: 94, y: LOS + 5 },
      slot: { x: 28, y: LOS + 5 },
      te:   { x: 36, y: LOS + 3 },
      rb:   { x: 52, y: LOS + 4 },
    },
  },

  /** Trips right — WR1 lone left, three receivers bunched right */
  'trips-right': {
    label: 'Trips Right',
    receiverStarts: {
      wr1:  { x: 6,  y: LOS + 5 },
      wr2:  { x: 90, y: LOS + 5 },
      slot: { x: 74, y: LOS + 5 },
      te:   { x: 62, y: LOS + 5 },
      rb:   { x: 50, y: LOS + 7 },
    },
  },

  /** Trips left — three receivers bunched left, WR2 lone right */
  'trips-left': {
    label: 'Trips Left',
    receiverStarts: {
      wr1:  { x: 10, y: LOS + 5 },
      wr2:  { x: 94, y: LOS + 5 },
      slot: { x: 24, y: LOS + 5 },
      te:   { x: 38, y: LOS + 5 },
      rb:   { x: 50, y: LOS + 7 },
    },
  },

  /** Empty / 5-wide — all five receivers spread, QB in shotgun */
  empty: {
    label: 'Empty / 5-Wide',
    receiverStarts: {
      wr1:  { x: 6,  y: LOS + 5 },
      wr2:  { x: 94, y: LOS + 5 },
      slot: { x: 22, y: LOS + 5 },
      te:   { x: 78, y: LOS + 5 },
      rb:   { x: 40, y: LOS + 5 },
    },
  },

  /** 12 personnel — two tight ends flanking OL, two WRs wide */
  tight: {
    label: '12 Personnel',
    receiverStarts: {
      wr1:  { x: 6,  y: LOS + 5 },
      wr2:  { x: 94, y: LOS + 5 },
      te:   { x: 36, y: LOS + 3 },
      slot: { x: 64, y: LOS + 3 },
      rb:   { x: 50, y: LOS + 8 },
    },
  },
};
