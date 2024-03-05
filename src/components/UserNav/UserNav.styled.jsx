import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavBar = styled.nav`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efede8;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 27px 10px 27px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border-color: ${p => p.theme.colors.hoverColor};
  }
  &.active {
    background-color: ${p => p.theme.colors.orangeColor};
    border: 1px solid ${p => p.theme.colors.orangeColor};
    &:hover {
      background-color: ${p => p.theme.colors.biegeColor};
    }
  }
  
`;
