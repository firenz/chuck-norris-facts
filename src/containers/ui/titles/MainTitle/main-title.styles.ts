import styled from 'styled-components';
import { TitleLayout } from 'components/Title';

export const MainTitleLayout = styled(TitleLayout)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-transform: capitalize;

  &::before {
    content: '👊';
    margin: 0 0.8rem;
  }

  &::after {
    content: '👊';
    margin: 0 0.8rem;
  }
`;