import styled from 'styled-components';
import { ButtonLayout } from 'components/Button';

export const ClearFactsButtonLayout = styled(ButtonLayout)`
  padding: 0.5rem 1rem 0.5rem 0.2rem;

  font-size: ${({ theme }) => theme.typography.sizes.sizeM};
  font-weight: normal;

  background-color: ${({ theme }) => theme.palette.info.error};
  color: ${({ theme }) => theme.palette.text.primary};

  &::before {
    content: '🗑️';
    margin: 0 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.main.dark};
  }

  @media (max-width: 768px) {
    left: 0.5rem;

    padding: 0.7rem 0.5rem;

    font-size: 0;

    &::before {
      font-size: ${({ theme }) => theme.typography.sizes.sizeL};
      text-shadow: 
      -1px -1px 0 ${({ theme }) => theme.palette.main.dark},
      1px -1px 0 ${({ theme }) => theme.palette.main.dark},
      -1px 1px 0 ${({ theme }) => theme.palette.main.dark},
      1px 1px 0 ${({ theme }) => theme.palette.main.dark};
    }
  }
`;
