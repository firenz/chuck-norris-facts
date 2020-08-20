import styled from 'styled-components';

export const NoDisplayingFactLayout = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sizeXL};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.8;
`;
