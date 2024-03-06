import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const ExercisesPageWrap = styled.div`
padding-top: 40px;
padding-bottom: 80px;

@media screen and (min-width: 768px) {
    padding-top: 72px;
    }
`;

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 62px 20px 20p 20px;

  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 84px 32px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    height: 100vh;
    padding: 84px 96px 0 96px;
  }
`;