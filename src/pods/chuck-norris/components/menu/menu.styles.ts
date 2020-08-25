import styled from 'styled-components';
import { rgba } from 'polished';

export const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => {
    const color = theme.palette.main.primary;
    return rgba(color, 0.75);
  }};
`;

export const MenuLayout = styled.div`
  position: fixed;
  top: 8.5rem;
  left: 0;
  z-index: 50;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  color: ${({ theme }) => theme.palette.text.grey};
  font-style: normal;
  font-weight: normal;
  text-align: left;

  background: ${({ theme }) => theme.palette.main.light2};

  & h1 {
    margin: 0;
    padding: 1.5rem 0 1rem 1rem;

    font-size: ${({ theme }) => theme.typography.sizes.sizeS};
    font-weight: normal;
    line-height: 1.125rem;

    opacity: 0.65;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: 980px) {
    position: fixed;
    top: 11.125rem;
    left: 50%;
    transform: translate(-50%);

    width: 39.5rem;
    height: 34.0625rem;

    border-radius: 8px;

    & h1 {
      margin: 2rem 2rem 1rem;
      padding: 0;
    }
  }
`;

export const MenuBottomLayout = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 59;

  height: 6.125rem;
  width: 100%;

  text-align: center;

  background: ${({ theme }) => theme.palette.main.light2};

  @media (min-width: 980px) {
    display: none;
  }
`;
