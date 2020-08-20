import styled from 'styled-components';
import { rgba } from 'polished';
import { chuckBackground } from 'assets/svg';

export const HeaderLayout = styled.header`
  margin-bottom: -17rem;
  height: 35rem;
  background: linear-gradient(
      ${({ theme }) => {
        const color: string = theme.palette.main.secondary;
        return rgba(color, 0);
      }},
      ${({ theme }) => {
          const color: string = theme.palette.main.secondary;
          return rgba(color, 0.5);
        }}
        43%,
      ${({ theme }) => theme.palette.main.background}
    ),
    url(${chuckBackground}) center 1.5rem fixed no-repeat
      ${({ theme }) => theme.palette.main.secondary};
`;
