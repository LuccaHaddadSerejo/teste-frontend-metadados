import styled from "styled-components";

export const StyledMainCart = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > h3 {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-550);
    font-family: var(--font-style-opensans);
    color: var(--color-dark-base);
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const StyledPriceCart = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-400);
    font-family: var(--font-style-opensans);
    color: var(--color-dark-base);
  }

  & > span {
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-400);
    font-family: var(--font-style-opensans);
    color: var(--color-dark-base);
  }
`;

export const StyledEmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;

  & > p {
    font-weight: var(--font-weight-sembold);
    font-size: var(--font-size-550);
    font-family: var(--font-style-opensans);
    color: var(--color-dark-base);
  }
`;

export const StyledClearCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`;
