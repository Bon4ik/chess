import { CHESS_PIECE_TYPE, CHESS_PIECES } from "utils/const";

export const isPawnMoveValid = (
  [targetRow, targetCol]: number[],
  [selectedRow, selectedCol]: number[],
  boardMatrix: IBoardCellEntity[][],
  activePlayer: string
): boolean => {
  // return false if it's the same cell
  if (selectedRow === targetRow && selectedCol === targetCol) return false;

  // if it's attack
  if (boardMatrix[targetRow][targetCol].value) {
    const pawnAttackCells = [
      [-1, -1],
      [-1, 1],
      [1, 1],
      [1, -1],
    ];

    return pawnAttackCells.some(
      ([row, col]) =>
        row + selectedRow === targetRow && col + selectedCol === targetCol
    );
  }

  // if it's move
  if (targetCol !== selectedCol) return false;
  else if (activePlayer === CHESS_PIECE_TYPE.DARK) {
    const diffRow = targetRow - selectedRow;

    if (diffRow === 1) return true;
    else if (diffRow === 2 && selectedRow === 1) return true;
    else return false;
  } else {
    const diffRow = selectedRow - targetRow;

    if (diffRow === 1) return true;
    else if (diffRow === 2 && selectedRow === 6) return true;
    else return false;
  }
};

export const isMoveValid = (
  targetCoordinates: number[],
  selecteCoordinates: number[],
  boardMatrix: IBoardCellEntity[][],
  activePlayer: string
): boolean => {
  const [selectedRow, selectedCol] = selecteCoordinates;
  const chessPiece = boardMatrix[selectedRow][selectedCol].value?.toLowerCase();

  switch (chessPiece) {
    case CHESS_PIECES.PAWN:
      return isPawnMoveValid(
        targetCoordinates,
        selecteCoordinates,
        boardMatrix,
        activePlayer
      );
    default:
      return false;
  }
};
