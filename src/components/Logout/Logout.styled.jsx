import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled.div`
  width: 70px;
  height: 20p;

  @media screen and (min-width: 768px) {
    width: 78px;
    height: 24px;
  }
`;

export const LogoutButtonLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${(p) => p.theme.colors.orangeColor};
  }
`;
export const Text = styled.span`
  margin-right: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const LogOutIcon = styled.svg`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
