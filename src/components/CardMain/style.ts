import styled from "styled-components";
import { CardFadeIn } from "../../styles/animations";

export const StyledMainCard = styled.li`
  width: 90%;
  max-width: 312px;
  min-height: 478px;
  max-height: 478px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  animation: ${CardFadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const StyledContent = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  & > :nth-child(1) {
    font-family: var(--font-style-opensans);
    color: var(--color-black-base);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-450);
  }

  & > div {
    & > :nth-child(1) {
      font-family: var(--font-style-opensans);
      color: var(--color-black50);
      font-weight: var(--font-weight-normal);
      font-size: var(--font-size-450);
    }

    & > :nth-child(2) {
      font-family: var(--font-style-opensans);
      color: var(--color-black-base);
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-450);
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
