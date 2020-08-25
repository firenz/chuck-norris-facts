import styled from 'styled-components';

export const FactsWrapper = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 4.375rem;

  @media (max-width: 393px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 979px) {
    margin-bottom: 4.375rem;
  }

  @media (min-width: 980px) {
    align-self: flex-end;
    margin-right: 0%;
  }

  @media (min-width: 1200px) {
    align-self: center;
    margin-right: -35%;
  }
`;
