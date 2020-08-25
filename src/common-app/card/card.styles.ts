import styled from 'styled-components';
import { rgba } from 'polished';

export const CardLayout = styled.div`
  max-width: 21.25rem;
  width: 95%;

  margin: 1.5rem 0;

  background: ${({ theme }) => theme.palette.main.light};
  box-shadow: 0px 4px 4px 2px
    ${({ theme }) => {
      const color = theme.palette.main.primary;
      return rgba(color, 0.2);
    }};
  border-radius: 8px;

  font-style: normal;
  font-weight: normal;
  line-height: 1.5rem;
  text-align: left;

  color: ${({ theme }) => theme.palette.text.grey};
`;
