import styled from "styled-components";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledContainer = styled.div`
  width: 95%;
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 59px;
  flex-grow: 1;

  margin-bottom: 100px;

  @media (min-width: 686px) {
    margin-bottom: 238px;
  }
`;
