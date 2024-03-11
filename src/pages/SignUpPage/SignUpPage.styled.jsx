import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${(p) => p.theme.colors.whiteColor};
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.37;
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    width: 496px;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 2px;
`;

export const PreLinkText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`;

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.whiteColor};
  text-decoration: underline;
  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.orangeColor};
  }
`;
