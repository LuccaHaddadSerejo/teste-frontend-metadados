import React from "react";
import { StyledButton } from "./style";

interface iButtonProps {
  children: React.ReactNode;
  type: "button";
  disabled?: boolean;
  onClick?: () => void;
  $buttonVariation?: string;
}

const Button = ({
  children,
  onClick,
  type,
  disabled,
  $buttonVariation,
}: iButtonProps) => {
  return (
    <StyledButton
      $buttonVariation={$buttonVariation}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
