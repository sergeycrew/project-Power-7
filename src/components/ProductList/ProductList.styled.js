import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #efede8;
  row-gap: 32px;
  column-gap: 16px;

  @media screen and (min-width: 768px) {
    width: 708px;
    height: 660px;
    column-gap: 16px;
    row-gap: 32px;
    overflow-y: scroll;

    //общее
    &::-webkit-scrollbar {
      width: 8px;
    }

    //дорожка
    &::-webkit-scrollbar-track {
      background: ${(p) => p.theme.colors.backgroundColorScroll};
      border-radius: 12px;
    }

    //бегунок
    &::-webkit-scrollbar-thumb {
      background: ${(p) => p.theme.colors.orangeLightColor};
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
    justify-content: start;
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
