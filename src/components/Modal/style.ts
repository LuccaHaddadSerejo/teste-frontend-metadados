import styled, { css } from "styled-components";
import { ModalFadeIn } from "../../styles/animations";

export interface iStyledModalProps {
  $isOpen: boolean;
}

export const StyledWrapper = styled.div<iStyledModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000099;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isOpen }: iStyledModalProps) => {
    switch ($isOpen) {
      case true:
        return css`
          display: block;
        `;
      case false:
        return css`
          display: none;
        `;
    }
  }}
`;

export const StyledModalMain = styled.div<iStyledModalProps>`
  position: absolute;
  background: white;
  width: 95%;
  max-width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 20px;
  border-radius: 4px;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  ${({ $isOpen }: iStyledModalProps) => {
    if ($isOpen) {
      return css`
        animation-name: ${ModalFadeIn};
      `;
    }
  }}
`;
