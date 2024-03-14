import styled, { css } from "styled-components";

export interface iStyledButtonProps {
  $buttonVariation?: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border: none;

  ${({ $buttonVariation }: iStyledButtonProps) => {
    switch ($buttonVariation) {
      case "regular":
        return css`
          width: 100%;
          height: 50px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500);
          font-family: var(--font-style-roboto);
          background-color: var(--color-black-base);
          justify-content: flex-end;
          gap: 8px;
          padding-right: 3px;
          color: var(--color-white-base);
          &:hover {
            background-color: var(--color-primary-base);
          }
        `;
      case "small":
        return css`
          width: 92px;
          height: 32px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-450);
          font-family: var(--font-style-roboto);
          background-color: var(--color-dark-base);
        `;
      case "large":
        return css`
          width: 223px;
          height: 72px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-700);
          font-family: var(--font-style-roboto);
          background-color: var(--color-primary-base);
          color: var(--color-white-base);

          &:hover {
            filter: brightness(1.1);
          }
        `;
      case "simple":
        return css`
          width: fit-content;
          height: 25px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500);
          font-family: var(--font-style-roboto);
          background-color: transparent;
          border: none;
          gap: 8px;
          color: var(--color-dark-base);

          @media (min-width: 600px) {
            margin-right: 30px;
          }

          &:hover {
            color: var(--color-primary-base);
          }
        `;
      case "search":
        return css`
          background-color: transparent;
          border: none;
          color: var(--color-dark-base);
        `;
      case "filter":
        return css`
          align-self: flex-end;
          width: 92px;
          height: 32px;
          gap: 4px;
          background-color: var(--color-black-base);
          border: none;
          color: var(--color-white-base);
          &:hover {
            background-color: var(--color-primary-base);
          }
        `;
      case "pagination":
        return css`
          width: fit-content;
          height: 25px;
          padding: 8px;
          gap: 4px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-450);
          font-family: var(--font-style-opensans);
          background-color: transparent;
          color: var(--color-dark-base);

          &:hover {
            color: var(--color-primary-base);
          }
        `;
      case "addSubtract":
        return css`
          width: fit-content;
          height: 25px;
          padding: 8px;
          gap: 4px;
          font-weight: var(--font-weight-semibold);
          font-size: var(--font-size-450);
          font-family: var(--font-style-opensans);
          background-color: transparent;
          color: var(--color-dark-base);

          &:hover {
            color: var(--color-primary-base);
          }
        `;
      case "categories":
        return css`
          font-size: var(--font-size-450);
          font-family: var(--font-style-opensans);
          font-weight: var(--font-weight-normal);
          color: var(--color-dark-base);
          background-color: transparent;
          &:hover {
            color: var(--color-primary-base);
          }
        `;

      case "clearFilter":
        return css`
          font-size: var(--font-size-overline);
          font-family: var(--font-style-opensans);
          font-weight: var(--font-weight-normal);
          color: var(--color-dark-base);
          background-color: transparent;
          &:hover {
            color: var(--color-primary-base);
          }
        `;
      case "filterOrder":
        return css`
          width: 100px;
          height: 40px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500-small);
          font-family: var(--font-style-roboto);
          background-color: var(--color-black-base);
          color: var(--color-white-base);

          &:hover {
            background-color: var(--color-primary-base);
          }
        `;

      case "filterOrderActive":
        return css`
          width: 100px;
          height: 40px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500-small);
          font-family: var(--font-style-roboto);
          background-color: var(--color-black-base);
          color: var(--color-white-base);

          background-color: var(--color-primary-base);
          &:hover {
            filter: brightness(1.1);
          }
        `;
      case "submitFilter":
        return css`
          width: 40%;
          height: 50px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500-small);
          font-family: var(--font-style-roboto);
          background-color: var(--color-black-base);
          color: var(--color-white-base);

          background-color: #228b22;
          &:hover {
            filter: brightness(1.1);
          }
        `;
      case "closeFilterModal":
        return css`
          width: 40%;
          height: 50px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500-small);
          font-family: var(--font-style-roboto);
          background-color: var(--color-black-base);
          color: var(--color-white-base);
          background-color: #d7191c;
          &:hover {
            filter: brightness(1.1);
          }
        `;
      case "clearCart":
        return css`
          width: 100%;
          max-width: 250px;
          height: 40px;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-500-small);
          font-family: var(--font-style-roboto);
          color: var(--color-white-base);
          background-color: var(--color-primary-base);
          &:hover {
            filter: brightness(1.1);
          }
        `;
    }
  }}
`;
