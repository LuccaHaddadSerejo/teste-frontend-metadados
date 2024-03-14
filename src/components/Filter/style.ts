import styled from "styled-components";

export const StyledModalMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  h3 {
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-500);
    font-family: var(--font-style-roboto);
  }

  div {
    width: 100%;
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;

    div {
      position: relative;
      display: flex;
      justify-content: flex-start;
      gap: 15px;
    }

    span {
      position: relative;
      top: 45px;
    }
  }

  & > :nth-child(3) {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      padding-top: 10px;
      gap: 15px;
    }
  }

  & > :nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 15px;
  }
`;
