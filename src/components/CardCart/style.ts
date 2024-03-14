import styled from "styled-components";
import { CardCartFadeIn } from "../../styles/animations";

export const StyledCartCard = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  overflow-x: auto;
  animation: ${CardCartFadeIn} 0.4s ease-in both;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 550px;

    & > :nth-child(1) {
      & > div {
        display: flex;
        align-items: center;
        gap: 16px;

        & > img {
          border: 1px solid var(--color-stroke);
          border-radius: 10px;
          max-height: 70px;
        }

        & > p {
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-overline);
          font-family: var(--font-style-roboto);
          color: var(--color-dark-25);
        }
      }
    }

    & > span {
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-overline);
      font-family: var(--font-style-roboto);
      color: var(--color-dark-10);
    }
  }

  & > :nth-child(3) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    & > span {
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-overline);
      font-family: var(--font-style-roboto);
      color: var(--color-dark-10);
    }

    & > button {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      padding-left: 80px;
    }
  }
`;

export const StyledAddSubtract = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 250px;
  width: 100%;

  & > div {
    height: fit-content;
    width: 101px;
    border: 1px solid var(--color-stroke);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & > span {
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-400);
      font-family: var(--font-style-roboto);
      color: var(--color-dark-10);
    }
  }
`;
