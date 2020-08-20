import styled from 'styled-components';
import { rgba } from 'polished';

export const MenuWrapper = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    ${({ theme }) => {
      const color: string = theme.palette.main.dark;
      return rgba(color, 0.7);
    }},
    ${({ theme }) => {
      const color: string = theme.palette.main.dark;
      return rgba(color, 0.7);
    }}
  );
`;

export const MenuLayout = styled.div`
  width: 40rem;
  max-width: 80%;
  padding: 1rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.palette.main.light};
`;
