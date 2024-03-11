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
border: 1px solid ${p => p.theme.colors.hoverColor};
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
cursor: pointer;`

export const UserSvg = styled.svg`
width: 61px;
height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`
export const UplSvg = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

  

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    /* top: -17.5px; */
  }`

  export const Label = styled.label`
  cursor: pointer;
position: absolute;
  top: -13px;
  left: -12px;
  /* right: -17px; */

 

  @media screen and (min-width: 768px) {
    left: -14.5px;
    height: 32px;
    top: -17.5px;
  }
  `

export const UserName = styled.p`
margin-top: 32px;
  color: ${p => p.theme.colors.whiteColor};
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
  margin: 40px 0px 44px 20px;
  /* margin-left: 10px ; */
  padding: 0;
  border-radius: 12px;
  background: ${(p) => p.theme.colors.orangeColor};
  color: #EFEDE8;
  
  /* .hidden {
  display: none;
} */

  &:disabled{
    color: rgba(239, 237, 232, 0.6);
    cursor: default;
    display: none;
  }
  @media screen and (min-width: 768px) {
    margin: 40px 0px 54px 20px;
    padding: 16px 50px;
  }
`;