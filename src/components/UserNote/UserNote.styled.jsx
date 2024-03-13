import styled from 'styled-components';

export const Text = styled.p`
  color: gray;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  font-family: 'RobotoRegular';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  /* @media screen and (min-width: 768px) and (max-width: 1439px) {
   max-width: 439px;
  } */
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const WrappSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--beige-color);
`;

export const Wrapp = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`;
