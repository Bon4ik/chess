import styled from "styled-components";

import { COLOR_PALETTE } from "utils/const";
import { IButton } from "./Button";

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  border: none;
  background: ${COLOR_PALETTE.BOARD_DARK};
  color: ${COLOR_PALETTE.WHITE};
  text-transform: uppercase;
  outline: none;
  font-weight: bold;
  cursor: ${({ disabled }: IButton) => (disabled ? "not-allowed" : "pointer")};
`;
