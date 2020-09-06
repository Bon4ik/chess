import {
  BOARD_SIZE,
  CELL_TYPE,
  CHESS_PIECE_TYPE,
  ALL_CHESS_PIECES,
} from "./const";

export const fromFENtoArray = (fen: string): string[] => {
  const res: string[] = [];

  for (let char of fen) {
    if (!isNaN(parseInt(char))) {
      let i = parseInt(char);

      while (i--) res.push("");
    } else if (ALL_CHESS_PIECES.has(char)) {
      res.push(char);
    } else {
      console.error("Error: FEN is invalid");
    }
  }

  return res;
};

export const getChessPieceType = (chessPiece: string): string | undefined => {
  if (!chessPiece) return undefined;

  if (chessPiece.toUpperCase() === chessPiece) return CHESS_PIECE_TYPE.LIGHT;

  return CHESS_PIECE_TYPE.DARK;
};

export const getDefaultMatrix = (rowsStr: string): IBoardCellEntity[][] => {
  const boardCells: IBoardCellEntity[][] = [];
  let prevType = CELL_TYPE.LIGHT;
  const rows = rowsStr.split("/");

  for (let row = 0; row < BOARD_SIZE; row++) {
    boardCells[row] = [];
    const currentRow = fromFENtoArray(rows[row]);

    for (let col = 0; col < BOARD_SIZE; col++) {
      boardCells[row][col] = {
        id: row * BOARD_SIZE + col,
        cellType: prevType,
        coordinates: [row, col],
        chessPieceType: getChessPieceType(currentRow[col]),
        value: currentRow[col],
      };

      prevType = prevType === CELL_TYPE.DARK ? CELL_TYPE.LIGHT : CELL_TYPE.DARK;
    }

    prevType = prevType === CELL_TYPE.DARK ? CELL_TYPE.LIGHT : CELL_TYPE.DARK;
  }

  return boardCells;
};
