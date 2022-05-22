import { CoordinatePattern } from "./types";

export const COORDINATE_PATTERNS: CoordinatePattern[] = [
  // S S S
  // - - -
  // - - -
  [
    {
      y: 0,
      x: 0,
    },
    {
      y: 0,
      x: 1,
    },
    {
      y: 0,
      x: 2,
    },
  ],
  // - - -
  // S S S
  // - - -
  [
    {
      y: 1,
      x: 0,
    },
    {
      y: 1,
      x: 1,
    },
    {
      y: 1,
      x: 2,
    },
  ],
  // - - -
  // - - -
  // S S S
  [
    {
      y: 2,
      x: 0,
    },
    {
      y: 2,
      x: 1,
    },
    {
      y: 2,
      x: 2,
    },
  ],
  // S - -
  // S - -
  // S - -
  [
    {
      y: 0,
      x: 0,
    },
    {
      y: 1,
      x: 0,
    },
    {
      y: 2,
      x: 0,
    },
  ],
  // - S -
  // - S -
  // - S -
  [
    {
      y: 0,
      x: 1,
    },
    {
      y: 1,
      x: 1,
    },
    {
      y: 2,
      x: 1,
    },
  ],
  // - - S
  // - - S
  // - - S
  [
    {
      y: 0,
      x: 2,
    },
    {
      y: 1,
      x: 2,
    },
    {
      y: 2,
      x: 2,
    },
  ],
  // S - -
  // - S -
  // - - S
  [
    {
      y: 0,
      x: 0,
    },
    {
      y: 1,
      x: 1,
    },
    {
      y: 2,
      x: 2,
    },
  ],
  // - - S
  // - S -
  // S - -
  [
    {
      y: 0,
      x: 2,
    },
    {
      y: 1,
      x: 1,
    },
    {
      y: 2,
      x: 0,
    },
  ],
];
