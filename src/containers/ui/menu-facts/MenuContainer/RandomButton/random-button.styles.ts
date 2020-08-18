import styled from 'styled-components';
import { CategoryButtonLayout } from '../Categories/CategoryButton/category-button.styles';

export const RandomButtonLayout = styled(CategoryButtonLayout)`
  width: 15.5rem;

  margin: 1rem;
  padding: 1.1rem 0;

  color: ${({ theme }) => theme.palette.text.accent};
  background-color: ${({ theme }) => theme.palette.main.secondary};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.main.dark};
  }

  @media (max-width: 768px) {
    width: 10.5rem;

    margin: 0.5rem;
    padding: 0.7rem 0 0.5rem;
  }
`;
