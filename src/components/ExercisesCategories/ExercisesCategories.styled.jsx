import styled from 'styled-components';


export const CategoriesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    min-height: 650px;
  }

  @media screen and (min-width: 1400px) {
    min-height: 428px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;

`;

export const PaginationBtn = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const PaginationItem = styled.li`
  margin-right: 8px;
`;
