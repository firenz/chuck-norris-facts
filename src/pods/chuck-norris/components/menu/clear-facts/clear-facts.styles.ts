import styled from 'styled-components';

export const ClearFactsLayout = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 51;

  color: #d83338;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.sizes.sizeS};
  line-height: 1.125rem;
  text-align: left;
  text-transform: uppercase;

  background: ${({ theme }) => theme.palette.main.light2};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 980px) {
    display: none;
  }
`;
