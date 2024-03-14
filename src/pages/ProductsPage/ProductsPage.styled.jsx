import styled from 'styled-components';

export const WrapperPagePadding = styled.div`
/* background-color: #040404; */
  margin-top: ${(p) => p.theme.spacing(10)};
  margin-bottom: ${(p) => p.theme.spacing(20)};

  @media screen and (min-width: 768px) {
    margin-top: ${(p) => p.theme.spacing(18)};
    margin-bottom: ${(p) => p.theme.spacing(12)};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${(p) => p.theme.spacing(20)};
  }
`;

export const WrapperFilters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: ${(p) => p.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: ${(p) => p.theme.spacing(7)};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${(p) => p.theme.spacing(8)};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17em;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37em;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
