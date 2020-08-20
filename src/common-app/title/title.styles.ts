import styled from 'styled-components';

export const TitleLayout = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.sizeXXL};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.sizes.sizeXL};
  }
`;
