import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoIcon = styled.svg`
  width: 36px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 17px;
  }
`;

export const LogoText = styled.svg`
  width: 82px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 16px;
  }
`;
