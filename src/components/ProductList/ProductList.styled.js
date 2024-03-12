import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: #efede8;
  row-gap: 32px;
  column-gap: 16px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 708px;
    height: 660px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: scroll;

    //общее
    &::-webkit-scrollbar {
      width: 22px;
      height: 167px;
    }

    //дорожка
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    //бегунок
    &::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.colors.orangeLightColor};
      border-radius: 12px;
      border: 7px solid ${(p) => p.theme.colors.blackColor};
    }
  }

  @media screen and (min-width: 1440px) {
    //общее
    &::-webkit-scrollbar {
      width: 22px;
      height: 167px;
    }

    width: 850px;
    height: 487px;
  }
`;

export const LiItem = styled.li`
  width: 100%;

  @media screen and (max-width: 335px) {
    max-width: 320px;
  }
  @media screen and (min-width: 335px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;
