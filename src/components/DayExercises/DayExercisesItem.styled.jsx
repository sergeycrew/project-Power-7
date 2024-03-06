import styled from 'styled-components';
// import { theme } from '../../styles/Theme';

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

  @media screen and (min-width: 1440px) {
    margin-right: 20px;
  }
`;

export const ListItem = styled.li`
  &:nth-of-type(1) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1440px) {
      width: 115px;
    }
  }

  &:nth-of-type(2) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 132px;
    }

    @media screen and (min-width: 1440px) {
      width: 157px;
    }
  }

  &:nth-of-type(3) {
    width: 297px;

    @media screen and (min-width: 768px) {
      width: 128px;
    }

    @media screen and (min-width: 1440px) {
      width: 131px;
    }
  }

  &:nth-of-type(4) {
    width: 81px;

    @media screen and (min-width: 768px) {
      width: 84px;
    }

    @media screen and (min-width: 1440px) {
      width: 106px;
    }
  }

  &:nth-of-type(5) {
    width: 80px;

    @media screen and (min-width: 768px) {
      width: 78px;
    }

    @media screen and (min-width: 1440px) {
      width: 91px;
    }
  }

  &:nth-of-type(6) {
    width: 76px;

    @media screen and (min-width: 1440px) {
      width: 82px;
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
export const DayExerciseItemContent = styled.p`
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
`;

// export const DayItemBodyPartContent = styled.p`
//   ${commonStyles}
//   width: 297px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 90px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 115px;
//   }
// `;

// export const DayItemEquipmentContent = styled.p`
//   ${commonStyles}
//   width: 297px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 132px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 157px;
//   }
// `;

// export const DayItemNameContent = styled.p`
//   ${commonStyles}
//   width: 297px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 128px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 131px;
//   }
// `;

// export const DayTargetContent = styled.p`
//   ${commonStyles}
//   width: 81px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 84px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 106px;
//   }
// `;

// export const DayCaloriesContent = styled.p`
//   ${commonStyles}
//   width: 80px;

//   @media screen and (min-width: 768px) {
//     ${commonMediaStyles}
//     width: 78px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 91px;
//   }
// `;

// export const DayTimeContent = styled.p`
//   ${commonStyles}
//   width: 76px;

//   @media screen and (min-width: 1440px) {
//     width: 82px;
//   }
// `;

// export const DayItemShortContent = styled.p`
//   border: 1px solid rgba(239, 237, 232, 0.3);
//   border-radius: 12px;
//   padding: 10px 43px 10px 14px;
//   width: 81px;
//   height: 38px;
//   font-family: "Roboto", sans-serif;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 129%;
//   color: #efede8;
// `;

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
