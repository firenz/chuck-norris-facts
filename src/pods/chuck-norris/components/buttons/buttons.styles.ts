import styled from 'styled-components';

export const ButtonsLayout = styled.div`
  position: fixed;
  z-index: 4;
  bottom: 2.7rem;

  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: space-between;

  max-width: 40rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 1rem;
  }
`;
