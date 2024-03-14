import styled from 'styled-components';
import { CustomModal } from '../CustomModal/CustomModal'

export const CustomModalWrap = styled(CustomModal)`
`;

export const ModalWrapper = styled.div`
  padding: 48px 24px;

  
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
 width: 287px;
 
   @media screen and (min-width: 374px) {
   
  };

  
  @media screen and (min-width: 768px) {
    width: 415px;  
     height: 34px;
  }
`;

export const InputName = styled.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${(p) => p.theme.colors.orangeColor};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${(p) => p.theme.colors.grayInput};

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const GramsSection = styled.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const InputGrams = styled.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.orangeColor};
  background: rgba(0, 0, 0, 0.5);
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${(p) => p.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 12px;
  }
`;



export const PCalories = styled.p`
  color: ${(p) => p.theme.colors.captionColor};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`;

export const ValueCalories = styled.span`
display: block;
color: ${(p) => p.theme.colors.whiteColor};
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CaloriesWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 12px 22px;
  border: none;
  color: ${(p) => p.theme.colors.whiteColor};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${(p) => p.theme.colors.orangeColor};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${(p) => p.theme.colors.orangeColor};
    background: ${(p) => p.theme.colors.whiteColor};
  }
  
  @media screen and (max-width: 374px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ButtonCancel = styled.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.colors.grayInput};
  background: transparent;
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${(p) => p.theme.colors.orangeColor};
    background: ${(p) => p.theme.colors.whiteColor};
  }

  @media screen and (max-width: 374px) {
    padding: 12px 32px;
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;