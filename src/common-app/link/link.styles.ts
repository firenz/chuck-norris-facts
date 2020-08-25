import styled from 'styled-components';

export const LinkLayout = styled.a`
  padding-left: 0.3rem;

  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.text.accent};
  }

  &:visited {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
