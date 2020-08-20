import styled from 'styled-components';
import { rgba } from 'polished';

export const FooterLayout = styled.footer`
  position: fixed;
  z-index: 3;
  bottom: 0;

  width: 100vw;
  padding: 4rem 0.5rem 0.5rem;

  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
  text-align: center;
  background: linear-gradient(
    ${({ theme }) => {
      const color: string = theme.palette.main.background;
      return rgba(color, 0);
    }},
    ${({ theme }) => theme.palette.main.background} 55%,
    ${({ theme }) => {
      const color: string = theme.palette.main.primary;
      return rgba(color, 1);
    }}
  );

  @media (max-width: 393px) {
    padding: 4rem 1rem 0.5rem;
    width: auto;
  }
`;

export const Link = styled.a`
  padding-left: 0.3rem;

  color: ${({ theme }) => theme.palette.link.normal};

  &:hover {
    color: ${({ theme }) => theme.palette.link.hover};
  }

  &:visited {
    color: ${({ theme }) => theme.palette.link.visited};
  }
`;
