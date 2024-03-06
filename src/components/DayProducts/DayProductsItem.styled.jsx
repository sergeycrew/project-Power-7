import styled from 'styled-components';

// const commonStyles = `
//   border: 1px solid ${theme.colors.accentColor};
//   border-radius: 12px;
//   padding: 10px 14px;
//   height: 38px;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 129%;
//   color: ${theme.colors.whiteColor};
// `;

// const commonMediaStyles = `
//     height: 40px;
//     font-size: 16px;
//     line-height: 150%;
//     padding: 8px 14px;
// `;

export const ProductsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-right: 12px;
  }
`;

export const ListItem = styled.li`
  &:nth-of-type(1) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 204px;
    }

    @media screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  &:nth-of-type(2) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 166px;
    }
  }

  &:nth-of-type(3) {
    width: 81px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(4) {
    width: 80px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(5) {
    width: 76px;

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
    }
  }
`;

// export const DayItemTitle = styled.p`
//   font-family: 'Roboto', sans-serif;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 150%;
//   color: ${(p) => p.theme.colors.orangeLightColor};
//   margin-bottom: 8px;
// `;

export const DayItemContent = styled.p`
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 12px;
  padding: 10px 14px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    height: 40px;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 14px;
  }
  /* 
  &:nth-of-type(1) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 204px;
    }

    @media screen and (min-width: 1440px) {
      width: 212px;
    }
  }

  &:nth-of-type(2) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 166px;
    }
  }

  &:nth-of-type(3) {
    width: 81px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(4) {
    width: 80px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 105px;
    }
  }

  &:nth-of-type(5) {
    width: 76px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
      width: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 110px;
    }
  } */
`;

// export const DayProductTitleContent = styled.p`
//   ${commonStyles}
//   width: 297px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 204px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 212px;
//   }
// `;

// export const DayCategoryContent = styled.p`
//   ${commonStyles}
//   width: 297px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 128px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 166px;
//   }
// `;

// export const DayCaloriesContent = styled.p`
//   ${commonStyles}
//   width: 81px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 90px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 105px;
//   }
// `;

// export const DayWeightContent = styled.p`
//   ${commonStyles}
//   width: 80px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 90px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 105px;
//   }
// `;

// export const DayRecommendContent = styled.p`
//   ${commonStyles}
//   width: 76px;
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   @media screen and (min-width: 768px) {
//     width: 80px;
//     ${commonMediaStyles}
//   }

//   @media screen and (min-width: 1440px) {
//     width: 110px;
//   }
// `;

export const RecomendalDot = styled.span`
  display: inline-block;
  border-radius: 10px;
  width: 14px;
  height: 14px;
  background-color: ${(p) => p.theme.colors.recommendedColor};
`;

export const DeleteButton = styled.button`
  position: relative;
  padding: 0;
  background: none;
  border: none;
  top: 4px;

  @media screen and (max-width: 767px) {
    right: 16px;
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
  /* justify-content: space-between; */
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
