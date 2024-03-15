import styled from 'styled-components';

export const ProductsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: -4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 20px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  position: relative;

  &:nth-of-type(1) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 115px;
    }
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 132px;
    }

    @media screen and (min-width: 1440px) {
      width: 157px;
    }
  }

  &:nth-of-type(3) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 131px;
    }
  }

  &:nth-of-type(4) {
    @media screen and (min-width: 375px) {
      width: 81px;
    }

    @media screen and (min-width: 768px) {
      width: 84px;
    }

    @media screen and (min-width: 1440px) {
      width: 106px;
    }
  }

  &:nth-of-type(5) {
    @media screen and (min-width: 375px) {
      width: 80px;
    }

    @media screen and (min-width: 768px) {
      width: 78px;
    }

    @media screen and (min-width: 1440px) {
      width: 91px;
    }
  }

  &:nth-of-type(6) {
    @media screen and (min-width: 375px) {
      width: 76px;
    }

    @media screen and (min-width: 1440px) {
      width: 82px;
    }
  }
`;

export const DayExerciseItemContent = styled.p`
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-transform: capitalize;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 14px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const DeleteButton = styled.button`
  padding: 0;
  background: none;
  border: none;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    position: relative;
    right: 16px;
    top: 5px;
  }
`;

export const DeleteIcon = styled.svg`
  height: 20px;
  width: 20px;
  fill: ${(p) => p.theme.colors.orangeLightColor};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    animation: shake 3s;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-5deg);
    }

    20% {
      transform: rotate(5deg);
    }

    30% {
      transform: rotate(-5deg);
    }

    40% {
      transform: rotate(5deg);
    }

    50% {
      transform: rotate(0deg);
      stroke: wheat;
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ItemExerciseWrapper = styled.div`
  display: flex;
  align-items: last baseline;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`;
