import styled from 'styled-components';
import { ButtonBaseLayout } from '../buttons.styles';

export const InitialLayout = styled(ButtonBaseLayout)`
  &:hover {
    color: ${({ theme }) => theme.palette.main.light2};
    background: ${({ theme }) => theme.palette.main.accent};
  }

  @media (min-width: 980px) {
    position: absolute;
    top: 31rem;
    left: 16%;
  }
`;
