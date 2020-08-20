import styled from 'styled-components';
import { rgba } from 'polished';

export const ButtonLayout = styled.button`
  padding: 1rem;

  font-size: ${({ theme }) => theme.typography.sizes.sizeM};

  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 5px -3px ${({ theme }) => {
        const color: string = theme.palette.main.dark;
        return rgba(color, 0.2);
      }},
    0 8px 10px 1px
      ${({ theme }) => {
        const color: string = theme.palette.main.dark;
        return rgba(color, 0.14);
      }},
    0 3px 14px 2px
      ${({ theme }) => {
        const color: string = theme.palette.main.dark;
        return rgba(color, 0.12);
      }};

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 5px -3px ${({ theme }) => {
          const color: string = theme.palette.main.dark;
          return rgba(color, 0.8);
        }},
      0 8px 10px 1px
        ${({ theme }) => {
          const color: string = theme.palette.main.dark;
          return rgba(color, 0.26);
        }},
      0 3px 14px 2px
        ${({ theme }) => {
          const color: string = theme.palette.main.dark;
          return rgba(color, 0.24);
        }};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px lightskyblue;
  }
`;
