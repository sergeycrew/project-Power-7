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
`;

export const ListItem = styled.li`
  width: 100%;
  position: relative;
  &:nth-of-type(1) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 204px;
    }

    @media screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  &:nth-of-type(2) {
    @media screen and (min-width: 375px) {
      width: 297px;
    }

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 166px;
    }
  }

  &:nth-of-type(3) {
    @media screen and (min-width: 375px) {
      width: 81px;
    }

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(4) {
    @media screen and (min-width: 375px) {
      width: 80px;
    }

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(5) {
    @media screen and (min-width: 375px) {
      width: 76px;
    }

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
    }
  }
`;

export const DayItemContent = styled.p`
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  word-wrap: break-word;
  white-space: nowrap;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
  }
`;

export const RecomendalDot = styled.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${({ $color }) => {
    switch ($color) {
      case 'red':
        return (p) => p.theme.colors.notRecommendedColor;
      default:
        return (p) => p.theme.colors.recommendedColor;
    }
  }};
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
`;

export const ItemProductWrapper = styled.div`
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
