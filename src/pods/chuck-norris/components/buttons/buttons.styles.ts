import styled from 'styled-components';
import { rgba } from 'polished';

export const ButtonsWrapperLayout = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;

  height: 4.375rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.palette.main.light2};
  box-shadow: 0px -4px 4px ${({ theme }) => {
      const color = theme.palette.main.primary;
      return rgba(color, 0.2);
    }};

  @media (min-width: 980px) {
    top: 31rem;
    left: 16%;

    width: 22rem;

    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;

    box-shadow: none;
    background: no-repeat;
  }
`;

export const ButtonBaseLayout = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.palette.main.light};
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.typography.sizes.sizeM};
  line-height: 1.5rem;
  text-transform: uppercase;
  text-align: center;

  background: ${({ theme }) => theme.palette.main.secondary};
  box-shadow: 0px 4px 4px 2px
    ${({ theme }) => {
      const color = theme.palette.main.primary;
      return rgba(color, 0.2);
    }};
`;
