import styled from 'styled-components';
import { rgba, darken } from 'polished';

export const FactCardHeader = styled.h1`
  margin: 0;
  padding: 1rem 1rem 0 1rem;

  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.sizes.sizeXS};
  line-height: 1rem;
  text-transform: uppercase;
  opacity: 0.65;
`;

export const FactCardContentLayout = styled.p`
  margin: 0;
  padding: 0.25rem 1rem 0 1rem;

  font-size: ${({ theme }) => theme.typography.sizes.sizeM};
  line-height: 1.5rem;
`;
