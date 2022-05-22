export type Sign = "tic" | "tac";

export type Coordinate = {
  y: number;
  x: number;
};

export type CoordinatePattern = [Coordinate, Coordinate, Coordinate];

export type Cell = {
  coordinate: Coordinate;
  sign: Sign;
};

export type Board = Cell[];

export type Result = {
  finished: boolean;
  winner?: Sign;
};
