import styled, { css } from "styled-components";

interface iStyledPagination {
  isHidden?: boolean;
}

export const StyledPagination = styled.div<iStyledPagination>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  span {
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-450);
    font-family: var(--font-style-opensans);
  }

  ${({ isHidden }) => {
    switch (isHidden) {
      case true:
        return css`
          display: none;
        `;
    }
  }}
`;
