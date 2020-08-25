import styled from 'styled-components';

export const CancelIconLayout = styled.button`
  display: none;

  @media (min-width: 980px) {
    display: block;

    position: absolute;
    top: 2rem;
    right: 2rem;

    width: 1.875rem;
    height: 1.875rem;

    padding: 0.35em;

    border-radius: 50%;

    background: ${({ theme }) => theme.palette.main.light2};

    &:hover {
      cursor: pointer;
    }

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;
