import styled from 'styled-components';
import { ButtonLayout } from 'common-app/Button';

export const CategoryButtonWrapper = styled.li`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 40%;

  margin: 1rem 0rem;

  @media (max-width: 768px) {
    flex-basis: 50%;

    margin: 0.5rem 0;
  }
`;

export const CategoryButtonLayout = styled(ButtonLayout)`
  width: 10.5rem;

  padding: 1rem 2rem;

  font-size: ${({ theme }) => theme.typography.sizes.sizeL};
  font-weight: bold;
  text-align: center;

  border-radius: 50px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.main.accent};
  }

  @media (max-width: 768px) {
    width: 7rem;
    padding: 0.7rem 0;

    font-size: ${({ theme }) => theme.typography.sizes.sizeM};
  }
`;
