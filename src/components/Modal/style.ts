import styled, { css } from "styled-components";

export interface iStyledModalProps {
  isOpen: boolean;
}

export const StyledWrapper = styled.div<iStyledModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000099;
  z-index: 999;

  ${({ isOpen }: iStyledModalProps) => {
    switch (isOpen) {
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

export const StyledModalMain = styled.div`
  position: fixed;
  background: white;
  width: 95%;
  max-width: 500px;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 20px;

  border-radius: 4px;
`;
