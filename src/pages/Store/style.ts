import styled from "styled-components";

export const StyledStoreMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  align-items: center;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & > h3 {
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-500);
      font-family: var(--font-style-roboto);
    }
  }
`;
