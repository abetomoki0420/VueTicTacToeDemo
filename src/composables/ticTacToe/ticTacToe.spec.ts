import { test, expect } from "vitest";
import { Board, Result } from "./types";
import { fillSign, existsCell, judgeGame } from "./useTicTacToe";

test("append sign", () => {
  const emptyBoard: Board = [];

  const filledBoard = fillSign(emptyBoard, {
    coordinate: {
      x: 0,
      y: 0,
    },
    sign: "tic",
  });

  expect(filledBoard).toEqual([
    {
      coordinate: {
        x: 0,
        y: 0,
      },
      sign: "tic",
    },
  ]);
});

test("confirms existing cell", () => {
  const board: Board = [
    {
      coordinate: {
        x: 0,
        y: 0,
      },
      sign: "tic",
    },
  ];

  expect(
    existsCell(board, {
      x: 0,
      y: 0,
    })
  ).toBe(true);

  expect(
    existsCell(board, {
      x: 1,
      y: 0,
    })
  ).toBe(false);
});

test("gameset", () => {
  const board: Board = [
    {
      coordinate: {
        x: 0,
        y: 0,
      },
      sign: "tac",
    },
    {
      coordinate: {
        x: 0,
        y: 1,
      },
      sign: "tac",
    },
    {
      coordinate: {
        x: 0,
        y: 2,
      },
      sign: "tac",
    },
  ];

  expect(judgeGame(board)).toEqual({
    finished: true,
    winner: "tac",
  } as Result);
});
