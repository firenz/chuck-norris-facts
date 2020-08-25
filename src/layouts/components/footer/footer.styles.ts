import styled from 'styled-components';

export const FooterLayout = styled.footer`
  padding: 0.75rem 3rem;

  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 500;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.main.background};

  @media (max-width: 393px) {
    font-size: ${({ theme }) => theme.typography.sizes.sizeXS};
  }
`;
