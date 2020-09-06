import React from "react";

import { BoardCellContainer, ChessPiece } from "./BoardCell.styled";

export interface IBoardCell extends IBoardCellEntity {
  onCellClick: (targetCoordinates: number[], chessPieceType?: string) => void;
  isActive: boolean;
}

const BoardCellComponent: React.FC<IBoardCell> = ({
  cellType,
  value,
  chessPieceType,
  coordinates,
  onCellClick,
  isActive,
}) => {
  const onClick = () => {
    onCellClick(coordinates, chessPieceType);
  };

  return (
    <BoardCellContainer isActive={isActive} type={cellType} onClick={onClick}>
      <ChessPiece type={chessPieceType}>{value}</ChessPiece>
    </BoardCellContainer>
  );
};

export default BoardCellComponent;
