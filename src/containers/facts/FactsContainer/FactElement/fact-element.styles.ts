import styled from 'styled-components';

export const FactElementLayout = styled.li`
  z-index: 1;
  position: relative;

  margin: 1rem;
  padding: 1rem;

  border: none;
  border-radius: 5px;

  font-size: ${({ theme }) => theme.typography.sizes.sizeL};
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.main.background};

  &:focus {
    outline: none;
  }

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 6rem;
  }
`;
