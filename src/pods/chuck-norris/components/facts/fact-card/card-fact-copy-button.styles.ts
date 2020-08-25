import styled from 'styled-components';
import { rgba, darken } from 'polished';

export const CopyLayout = styled.button`
  margin: 0;
  padding: 1rem;

  border: none;
  background: none;

  font-weight: bold;
  font-size: 0.75rem;
  line-height: 21px;
  text-transform: uppercase;
  color: #f05b22;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const CopiedLayout = styled(CopyLayout)`
  color: #5abab6;

  &:hover {
    cursor: initial;
  }
`;

export const IconLayout = styled.img`
  width: 1.25rem;
  height: 1.25rem;

  padding-right: 0.5rem;

  vertical-align: middle;
`;
