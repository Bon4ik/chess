import React, { MouseEvent } from "react";

import { ButtonStyled } from "./Button.styled";

export interface IButton {
  onClick: (e: MouseEvent) => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<IButton> = ({
  onClick,
  children,
  disabled,
  ...rest
}) => (
  <ButtonStyled onClick={onClick} {...rest} disabled={disabled}>
    {children}
  </ButtonStyled>
);

export default ButtonComponent;
