import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomModal } from 'components/CustomModal/CustomModal';
// import { MainButton } from '../MainButton/MainButton';


export const CustomModale = styled(CustomModal)`

`;

export const MainButton = styled.button`
  border-radius: 12px;
  background: #e6533c;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  transition: color 0.2s ;

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }

  &:hover,
  &:focus {
    background: #ef8964;
    transform: scale(1);
    color: #efede8;
  }
`;
export const Img = styled.img`
  width: 123px;
  height: 97px;
  margin-bottom: 27px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    margin-top: 64px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  
`;

export const TextWrapper = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Text = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const Value = styled.span`
  color: #e6533c;
`;

export const BtnWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CustomLink = styled(Link)`
cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  transition: color 0.2s ;
  
  &:hover,
  &:focus {
    color: #EFEDE8; 
    transform: scale(1);

  }
`;