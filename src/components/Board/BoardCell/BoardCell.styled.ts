import styled from "styled-components";

import { CELL_TYPE, COLOR_PALETTE } from "utils/const";

interface IProps {
  type?: string;
  isActive?: boolean;
}

export const BoardCellContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  opacity: ${({ isActive }) => (isActive ? 0.6 : 1)};
  background: ${({ type }: IProps) =>
    type === CELL_TYPE.DARK
      ? COLOR_PALETTE.BOARD_DARK
      : COLOR_PALETTE.BOARD_LIGHT};
`;

export const ChessPiece = styled.span`
  font-size: 65px;
  line-height: 1;
  text-transform: uppercase;
  text-shadow: 0 2px
    ${({ type }: IProps) =>
      type === CELL_TYPE.DARK ? COLOR_PALETTE.WHITE : COLOR_PALETTE.BLACK};
  color: ${({ type }: IProps) =>
    type === CELL_TYPE.DARK ? COLOR_PALETTE.BLACK : COLOR_PALETTE.WHITE};
`;
