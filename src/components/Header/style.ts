import styled from "styled-components";

export const StyledBackground = styled.div`
  width: 100%;
  min-height: 186px;
  background-color: var(--color-black5);
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1351px;
  gap: 30px;
  margin: 0 auto;

  & > :nth-child(2) {
    width: 100%;
    display: flex;
    overflow-y: auto;
    overflow-x: auto;
    gap: 57.67px;
  }
`;

export const StyledHeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--color-stroke);

  @media (min-width: 600px) {
    flex-direction: row-reverse;
  }

  img {
    position: relative;

    @media (min-width: 600px) {
      left: 20px;
    }
  }

  & > :nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (min-width: 600px) {
      flex-grow: 1;
      justify-content: space-between;
      left: 20px;
    }
  }

  & > :nth-child(2) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 600px) {
      width: 68%;
      justify-content: flex-start;
    }
  }
`;

export const StyledOpenSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;

  & > :nth-child(2) {
    position: absolute;
    bottom: 12px;
    right: 110px;

    &:hover {
      color: var(--color-primary-base);
    }
  }

  & > :nth-child(3) {
    position: relative;
    top: 3px;
  }
`;

export const StyledClosedSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
