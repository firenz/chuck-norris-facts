import styled from 'styled-components';
import { ButtonBaseLayout } from '../buttons.styles';

export const GetCategoryFactLayout = styled(ButtonBaseLayout)`
  padding: 0.75rem 2.875rem;

  border-radius: 8px 0px 0px 8px;
  border-right: 2px solid ${({ theme }) => theme.palette.main.accent};
  box-shadow: none;

  &:hover {
    color: ${({ theme }) => theme.palette.main.light2};
    background: ${({ theme }) => theme.palette.main.accent};
  }
`;
