import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`;

export const AvatarContainer = styled.div`
  border-radius: 100px;
  border: 1px solid ${(p) => p.theme.colors.hoverColor};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Avatar = styled.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;

export const UplBtn = styled.div`
  cursor: pointer;
`;

export const UserSvg = styled.svg`
  width: 40px;
  height: 41px;
  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;
export const UplSvg = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  /* left: -1px; */

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: absolute;
  top: -13px;
  left: -12px;
  

  @media screen and (min-width: 768px) {
    left: -15px;
    height: 32px;
    top: -17.5px;
  }
`;

export const UserName = styled.p`
  margin-top: 32px;
  color: ${(p) => p.theme.colors.whiteColor};
  font-family: 'RobotoRegular';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const SubTitle = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;
export const ButtonVerify = styled.button`
  margin-top: 2px;
  /* color: ${(p) => p.theme.colors.successtColor}; */
  position: relative;
  
  /* color: ${(p) => p.theme.colors.errorColor}; */
  padding: 0;
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 18px;
/* font-weight: 500; */
  background: 0;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    /* border-bottom: 2px solid orange; */
    /* box-shadow: inset 0 -2px #d80027; */
    box-shadow: inset 0 -2px tomato;
  }

  &:disabled {
    /* color: rgba(239, 237, 232, 0.5); */

    cursor: default;
    /* display: none; */
  }
  @media screen and (min-width: 768px) {
    margin-top: 2px;
    /* padding: 16px 50px; */
  }
`;

export const VerSvg = styled.svg`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 3px;
  left: 55px;
  /* right: 3px; */
  /* @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 3px;
  } */
`;

export const NotVerSvg = styled.svg`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 2px;
  left: 40px;
  /* right: 3px; */
  /* @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    top: 3px;
  } */
`;
