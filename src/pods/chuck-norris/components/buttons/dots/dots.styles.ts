import styled from 'styled-components';
import { ButtonBaseLayout } from '../buttons.styles';

export const DotsLayout = styled(ButtonBaseLayout)`
  padding: 0.5rem 1rem 1rem 1rem;

  border-radius: 0px 8px 8px 0px;
  box-shadow: none;

  &:hover {
    color: ${({ theme }) => theme.palette.main.light2};
    background: ${({ theme }) => theme.palette.main.accent};
  }
`;
