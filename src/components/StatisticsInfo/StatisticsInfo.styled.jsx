import styled from 'styled-components';

export const InfoContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: 0;
  width: 234px;
  height: 212px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  right: 20px;
  bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 405px;
    height: 262px;
    gap: 56px;
    right: 32px;
    bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    right: 32px;
    bottom: 171px;
    width: 638px;
    height: 245px;
    gap: 39px;
    margin: 0;
  }
`;

export const Tutorial = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 146px;
  height: 66px;
  border-radius: ${(p) => p.theme.radii.ld};
  background: ${(p) => p.theme.colors.darkGrayColor};

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    gap: 12px;
    padding-left: 23px;
    justify-content: start;
  }
`;

export const TutorialImgBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.orangeLightColor};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TutorialImg = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const TutorialTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const TutorialNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const TutorialText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Calories = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: 0;
  padding-left: 16px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  width: 119px;
  height: 76px;

  border-radius: ${(p) => p.theme.radii.ld};
  background: ${(p) => p.theme.colors.orangeLightColor};

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    gap: 8px;
    padding-left: 22px;
  }
`;

export const CaloriesImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.biegeColor};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const CaloriesImg = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CaloriesTextBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;

  @media screen and (min-width: 768px) {
    gap: 11px;
  }
`;

export const CaloriesNumber = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.04;
    letter-spacing: -0.02em;
  }
`;

export const CaloriesText = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
