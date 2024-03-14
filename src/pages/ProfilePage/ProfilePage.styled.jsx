import styled from 'styled-components';

export const Container = styled.div`
 

  @media screen and (min-width: 768px) and (max-width: 1439px) {
  
  }

  @media screen and (min-width: 1440px) {

  }
`;

export const Title = styled.h2`
   color: #efede8;
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 28px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    padding-top: 72px;
  }
`;

export const WrappInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
export const WrappForm = styled.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 64px;
  }
`;



export const LogoutWrap = styled.div`
margin-top: 32px;
margin-left: auto;

width: 70px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  } 
`
export const UserWrap = styled.div`

 @media screen and (min-width: 768px) and (max-width: 1439px) {margin: auto;
    width: 439px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 36px;
  }
`