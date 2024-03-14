import styled from "styled-components";

export const StyledProductDetailMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  gap: 64px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & > :nth-child(2) {
    @media (min-width: 768px) {
      width: 50%;
      flex-direction: row;
    }

    & > h3 {
      margin-bottom: 9px;
      color: var(--color-dark-base);
      font-size: var(--font-size-850);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-style-roboto);
    }

    & > span {
      margin-bottom: 9px;
      color: var(--color-dark-base);
      font-size: var(--font-size-600);
      font-weight: var(--font-weight-normal);
      font-family: var(--font-style-roboto);
    }

    & > p {
      margin-top: 24px;
      margin-bottom: 24px;
      color: var(--color-dark-base);
      font-size: var(--font-size-450);
      font-weight: var(--font-weight-normal);
      font-family: var(--font-style-opensans);
    }
  }
`;
