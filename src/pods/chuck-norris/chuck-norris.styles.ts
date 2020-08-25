import styled from 'styled-components';

export const BackgroundImage = styled.img`
  display: none;

  @media (min-width: 980px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;

    width: 100%;
    height: 100%;
  }
`;
