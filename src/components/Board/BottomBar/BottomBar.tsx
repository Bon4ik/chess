import React from "react";

import Button from "components/shared/Button";
import { BottomBarContainer } from "./BottomBar.styled";

interface IBottomBarComponent {
  addPawn: () => void;
  isAddPawnDisabled: boolean;
}

const BottomBarComponent: React.FC<IBottomBarComponent> = ({
  addPawn,
  isAddPawnDisabled,
}) => (
  <BottomBarContainer>
    <Button disabled={isAddPawnDisabled} onClick={addPawn}>
      Add pawn
    </Button>
  </BottomBarContainer>
);

export default BottomBarComponent;
