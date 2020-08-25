import styled from 'styled-components';

export const CategoriesLayout = styled.div`
  margin-bottom: 6.125rem;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (min-width: 980px) {
    overflow: hidden;

    margin-bottom: 0;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
