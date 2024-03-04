import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoutButtonLink = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgba(239, 237, 232, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${p => p.theme.colors.orangeColor};
  }
`;
export const Text = styled.span`
  margin-right: 8px;
  font-size: 14px;
  font-weight: 400;
`;

export const LogOutSvg = styled.svg`
width="20"
height="20" 
`