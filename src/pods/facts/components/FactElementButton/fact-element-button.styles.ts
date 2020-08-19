import styled from 'styled-components';
import { rgba } from 'polished';
import { ButtonLayout } from 'common-app/Button';

export const FactElementButtonLayout = styled(ButtonLayout)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  padding: 0.2rem 0.6rem 0.2rem 0;

  border-radius: 5px;
  background: linear-gradient(
    ${({ theme }) => {
      const color: string = theme.palette.info.success;
      return rgba(color, 0.7);
    }},
    ${({ theme }) => {
      const color: string = theme.palette.info.success;
      return rgba(color, 0.7);
    }}
  );

  font-size: ${({ theme }) => theme.typography.sizes.sizeXXL};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};

  opacity: 0;
  box-shadow: none;

  &::before {
    content: '📋';
    margin: 0 0.5rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: none;
  }

  &:active {
    background: linear-gradient(
      ${({ theme }) => {
        const color: string = theme.palette.info.success;
        return rgba(color, 0.9);
      }},
      ${({ theme }) => {
        const color: string = theme.palette.info.success;
        return rgba(color, 0.9);
      }}
    );
  }
`;
