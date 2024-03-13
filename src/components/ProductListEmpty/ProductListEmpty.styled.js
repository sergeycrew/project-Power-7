import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 375px) {
    width: 335px;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 580px;
    margin-top: 92px;
    height: 487px;
  }
`;

export const Description = styled.p`
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 375px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Attention = styled.span`
  color: ${(p) => p.theme.colors.orangeColor};
`;
