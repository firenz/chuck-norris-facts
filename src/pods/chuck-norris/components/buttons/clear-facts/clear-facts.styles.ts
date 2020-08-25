import styled from 'styled-components';
import { ButtonBaseLayout } from '../buttons.styles';

export const ClearFactsLayout = styled(ButtonBaseLayout)`
  display: none;

  margin: 1rem;

  font-size: ${({ theme }) => theme.typography.sizes.sizeS};
  line-height: 1.25rem;

  background: ${({ theme }) => theme.palette.info.error};
  border: 1px solid ${({ theme }) => theme.palette.main.secondary};

  &:hover {
    color: ${({ theme }) => theme.palette.info.error};
    background: ${({ theme }) => theme.palette.main.secondary};
    border: 1px solid ${({ theme }) => theme.palette.info.error};
  }

  @media (min-width: 980px) {
    display: block;
    box-shadow: none;
    margin-left: 0;
  }
`;
