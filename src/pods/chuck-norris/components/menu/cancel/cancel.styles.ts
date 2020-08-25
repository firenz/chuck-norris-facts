import styled from 'styled-components';

export const CancelLayout = styled.button`
  margin: 1.5rem 1rem;
  padding: 0.75rem 7rem;

  color: ${({ theme }) => theme.palette.main.secondary};
  font-weight: 800;
  font-size: ${({ theme }) => theme.typography.sizes.sizeM};
  line-height: 1.5rem;
  text-transform: uppercase;

  background: ${({ theme }) => theme.palette.main.light2};
  border: 1px solid ${({ theme }) => theme.palette.main.secondary};
  box-sizing: border-box;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.palette.main.secondary};
    color: ${({ theme }) => theme.palette.main.light2};
  }
`;
