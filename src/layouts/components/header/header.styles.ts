import styled from 'styled-components';

export const HeaderLayout = styled.header`
  @media (min-width: 980px) {
    position: fixed;
    top: 4rem;
    left: 16%;
    z-index: 15;

    margin-left: -3rem;
  }
`;

export const Character = styled.img`
  height: 20rem;
  margin-top: 1rem;

  @media (min-width: 980px) {
    width: 401px;
    height: 376.45px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translate(-50%);

  @media (min-width: 980px) {
    margin-top: 6%;
  }
`;
