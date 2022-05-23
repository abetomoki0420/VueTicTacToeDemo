import { ref, computed } from "vue";
import { COORDINATE_PATTERNS } from "./constants";
import type { Board, Sign, Cell, Coordinate, Result } from "./types";

export const useTitTacToe = (initialSign = "tic" as Sign) => {
  const _board = ref<Board>([]);
  const _currentSign = ref<Sign>(initialSign);

  const board = computed(() => _board.value);
  const currentSign = computed(() => _currentSign.value);

  const getCell = (x: number, y: number) => {
    return board.value.find((cell) => {
      return cell.coordinate.x === x && cell.coordinate.y === y;
    });
  };

  const setSign = (x: number, y: number) => {
    if (resultStatus.value.finished) {
      return false;
    }

    if (
      existsCell(board.value, {
        x,
        y,
      })
    ) {
      return false;
    }

    _board.value = fillSign(board.value, {
      coordinate: {
        y,
        x,
      },
      sign: _currentSign.value,
    });

    _currentSign.value = _currentSign.value === "tic" ? "tac" : "tic";

    return true;
  };

  const resultStatus = computed(() => {
    return judgeGame(board.value);
  });

  const restart = () => {
    if (!resultStatus.value.finished) {
      return;
    }

    _board.value = [];
    _currentSign.value = initialSign;
  };

  return {
    board,
    currentSign,
    resultStatus,
    getCell,
    setSign,
    restart,
  };
};

export const existsCell = (board: Board, targetCoordinate: Coordinate) => {
  return !!board.find((_cell) => {
    const { x, y } = _cell.coordinate;
    const { x: targetX, y: targetY } = targetCoordinate;

    return x === targetX && y === targetY;
  });
};

export const fillSign = (board: Board, cell: Cell) => {
  return [...board, cell];
};

export const judgeGame = (board: Board): Result => {
  const matchPatterns = COORDINATE_PATTERNS.filter((coordinatePattern) => {
    const [fc, sc, tc] = coordinatePattern;

    const matchCells = [
      board.find(
        ({ coordinate }) => coordinate.y === fc.y && coordinate.x === fc.x
      ),
      board.find(
        ({ coordinate }) => coordinate.y === sc.y && coordinate.x === sc.x
      ),
      board.find(
        ({ coordinate }) => coordinate.y === tc.y && coordinate.x === tc.x
      ),
    ];

    const judgeMatchCells = (cells: (Cell | undefined)[]): cells is Cell[] => {
      if (cells[0] && cells[1] && cells[2]) {
        return true;
      } else {
        return false;
      }
    };

    if (!judgeMatchCells(matchCells)) {
      return false;
    }

    const matchSigns = matchCells.map((matchCell) => matchCell.sign);
    return matchSigns.every((sign) => sign === matchSigns[0]);
  });

  if (matchPatterns.length === 0) {
    if (board.length === 9) {
      return {
        finished: true,
      };
    } else {
      return {
        finished: false,
      };
    }
  }

  const matchSign = board.find((cell) => {
    const { x, y } = cell.coordinate;
    const { x: matchX, y: matchY } = matchPatterns[0][0];
    return x === matchX && y === matchY;
  })?.sign;

  return {
    finished: true,
    winner: matchSign,
  };
};
