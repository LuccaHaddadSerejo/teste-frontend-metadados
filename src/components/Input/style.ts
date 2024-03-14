import styled, { css } from "styled-components";

export interface iStyledInputProps {
  inputVariation?: string;
}

export const StyledInput = styled.div<iStyledInputProps>`
  gap: 15px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    ${({ inputVariation }) => {
      switch (inputVariation) {
        case "search":
          return css`
            width: 100%;
            max-width: 190px;
            height: 30px;
            padding: 0 10px 0 15px;
            flex-grow: 2;
            border: 1px solid var(--color-dark-base);
            background-color: white;
            position: relative;
            bottom: 7px;

            &::placeholder {
              font-family: var(--font-style-roboto)
              font-weight: var(--font-weight-normal);
              font-size: 14px;
              color: var(--color-gray100);
            }

            &:focus {
              border: 2px solid var(--color-gray600);
            }
          `;
        case "filterPrice":
          return css`
            width: 100%;
            max-width: 210px;
            height: 40px;
            padding: 0 10px 0 15px;
            border: 1px solid var(--color-dark-base);
            position: relative;
            bottom: 7px;

            &::placeholder {
              font-family: var(--font-style-roboto);
              font-weight: var(--font-weight-normal);
              font-size: 14px;
              color: var(--color-dark50);
            }

            &:focus {
              border: 1px solid var(--color-primary-base);
            }
          `;
      }
    }}
  }

  label {
    font-family: var(--font-style-roboto);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-400);
    color: var(--color-dark75);
  }
`;
