import styled from 'styled-components';
import { rgba } from 'polished';

export const MainLayout = styled.main`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 1rem;

  background: linear-gradient(
    ${({ theme }) => {
      const color: string = theme.palette.main.secondary;
      return rgba(color, 0);
    }},
    ${({ theme }) => theme.palette.main.background} 56%
  );
`;
