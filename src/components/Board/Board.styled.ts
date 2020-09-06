import styled from "styled-components";

import { COLOR_PALETTE } from "utils/const";

export const BoardContainer = styled.div`
  width: 800px;
  height: 800px;
  border: 8px solid ${COLOR_PALETTE.BOARD_DARK};
  flex-wrap: wrap;
  display: flex;
`;
