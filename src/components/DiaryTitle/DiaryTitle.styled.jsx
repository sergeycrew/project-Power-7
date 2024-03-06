import styled from 'styled-components';

export const Title = styled.h1`
  padding: 40px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  color: ${(p) => p.theme.colors.whiteColor};

  @media screen and (min-width: 768px) {
    padding: 72px 0 32px 0;
    font-size: 32px;
    line-height: 137%;
  }
`;
