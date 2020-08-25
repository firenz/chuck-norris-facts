import styled from 'styled-components';

export const CategoryItemLayout = styled.button`
  padding: 1rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.625rem;
  text-align: left;
  text-transform: capitalize;

  color: ${({ theme }) => theme.palette.main.dark};
  background: ${({ theme }) => theme.palette.main.light2};

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.main.grey};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.palette.main.secondary};
    color: ${({ theme }) => theme.palette.main.light2};
  }

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.palette.main.grey};
  }

  @media (min-width: 980px) {
    /* width: 11.125rem;
    height: 3.75rem; */

    min-width: 11.125rem;

    margin: 0.5rem;
    padding: 1rem 1.875rem;

    background-color: ${({ theme }) => theme.palette.main.secondary};

    border: none;
    border-radius: 4px;

    color: ${({ theme }) => theme.palette.main.light2};
    line-height: 27px;
    text-align: center;

    &:first-child {
      background-color: ${({ theme }) => theme.palette.main.accent};
    }

    &:hover {
      background-color: ${({ theme }) => theme.palette.main.primary};
    }
  }
`;
