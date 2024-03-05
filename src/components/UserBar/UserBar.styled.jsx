import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserBarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 14px;
  gap: 10px;
  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 28px;
  }
`;
export const UserLink = styled(Link)`
  :hover {
    border-color: ${p => p.theme.colors.orangeColor};
  }
`;

export const UserAvatar = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${p => p.theme.colors.orangeColor};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.greyColor});
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
export const IconSettings = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    filter: drop-shadow(1px 1px ${p => p.theme.colors.orangeColor});
  }
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
export const IconUserAvatar = styled.svg`
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
