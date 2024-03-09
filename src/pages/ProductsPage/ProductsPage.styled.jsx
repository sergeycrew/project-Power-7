import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
    max-width: 1440px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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
