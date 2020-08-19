import styled from 'styled-components';
import { ButtonLayout } from 'common-app/Button';

export const GetFactButtonLayout = styled(ButtonLayout)`
  padding: 1rem 2rem 1rem 0.3rem;

  border-radius: 50px;

  font-size: ${({ theme }) => theme.typography.sizes.sizeXXL};
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.palette.main.light};
  color: ${({ theme }) => theme.palette.text.secondary};

  &::before {
    content: '👊';
    margin: 0 0.8rem;
    text-shadow: 
      -1px -1px 0 ${({ theme }) => theme.palette.main.dark}, 
      1px -1px 0 ${({ theme }) => theme.palette.main.dark}, 
      -1px 1px 0 ${({ theme }) => theme.palette.main.dark},
      1px 1px 0 ${({ theme }) => theme.palette.main.dark};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.main.accent};
  }

  @media (max-width: 768px) {
    right: 0.5rem;

    margin: 0;
    padding: 1rem 0.7rem;

    font-size: 0;

    &::before {
      font-size: ${({ theme }) => theme.typography.sizes.sizeXL};
    }
  }
`;