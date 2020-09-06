import React, { useMemo, useCallback, Fragment, useState } from "react";

import BoardCell from "./BoardCell";
import BottomBar from "./BottomBar";
import { BoardContainer } from "./Board.styled";
import { isMoveValid } from "./helpers";
import {
  CHESS_PIECES,
  FREE_LEGAL_SLOTS,
  DEFAULT_PAWN_ROW,
  CHESS_PIECE_TYPE,
  DEFAULT_BOARD,
} from "utils/const";
import { getDefaultMatrix } from "utils/getDefaultBoardMatrix";

const BoardComponent = () => {
  const [freeLegalSlots, setFreeLegalSlots] = useState(FREE_LEGAL_SLOTS);
  const [boardMatrix, setBoardMatrix] = useState(getDefaultMatrix(DEFAULT_BOARD));
  const [activePlayer, setActivePlayer] = useState(CHESS_PIECE_TYPE.LIGHT);
  const [selectedChessPiece, setSelectedChessPiece] = useState<number[]>([]);

  const onCellClick = useCallback(
    (targetCoordinates: number[], chessPieceType?: string) => {
      if (chessPieceType === activePlayer) {
        setSelectedChessPiece(targetCoordinates);
      } else if (selectedChessPiece.length) {
        const isValid = isMoveValid(
          targetCoordinates,
          selectedChessPiece,
          boardMatrix,
          activePlayer
        );

        if (isValid) {
          const nextActivePlayer =
            activePlayer === CHESS_PIECE_TYPE.LIGHT
              ? CHESS_PIECE_TYPE.DARK
              : CHESS_PIECE_TYPE.LIGHT;
          const newBoardMatrix = boardMatrix.map((row) => [...row]);
          const [newRow, newCol] = targetCoordinates;
          const [oldRow, oldCol] = selectedChessPiece;

          // update new cell
          newBoardMatrix[newRow][newCol].value =
            boardMatrix[oldRow][oldCol].value;
          newBoardMatrix[newRow][newCol].chessPieceType = activePlayer;

          // remove old cell
          newBoardMatrix[oldRow][oldCol].value = "";

          setSelectedChessPiece([]);
          setBoardMatrix(newBoardMatrix);
          setActivePlayer(nextActivePlayer);
        }
      }
    },
    [activePlayer, boardMatrix, selectedChessPiece]
  );

  const addWhitePawn = useCallback(() => {
    if (freeLegalSlots.length) {
      const pawnIndex = Math.floor(Math.random() * freeLegalSlots.length);
      const newFreeLegalSlots = freeLegalSlots
        .slice(0, pawnIndex)
        .concat(freeLegalSlots.slice(pawnIndex + 1));

      const newBoardMatrix = boardMatrix.map((row) => [...row]);
      newBoardMatrix[DEFAULT_PAWN_ROW][freeLegalSlots[pawnIndex]] = {
        ...newBoardMatrix[DEFAULT_PAWN_ROW][freeLegalSlots[pawnIndex]],
        value: CHESS_PIECES.PAWN,
        chessPieceType: CHESS_PIECE_TYPE.LIGHT,
      };

      setBoardMatrix(newBoardMatrix);
      setFreeLegalSlots(newFreeLegalSlots);
    }
  }, [boardMatrix, freeLegalSlots]);

  const board = useMemo(
    () =>
      boardMatrix.map((row: IBoardCellEntity[]) =>
        row.map((cell: IBoardCellEntity) => (
          <BoardCell
            {...cell}
            key={cell.id}
            onCellClick={onCellClick}
            isActive={
              selectedChessPiece[0] === cell.coordinates[0] &&
              selectedChessPiece[1] === cell.coordinates[1]
            }
          />
        ))
      ),
    [boardMatrix, onCellClick, selectedChessPiece]
  );

  const isAddPawnDisabled = useMemo(() => freeLegalSlots.length === 0, [
    freeLegalSlots,
  ]);

  return (
    <Fragment>
      <BoardContainer>{board}</BoardContainer>
      <BottomBar addPawn={addWhitePawn} isAddPawnDisabled={isAddPawnDisabled} />
    </Fragment>
  );
};

export default BoardComponent;
