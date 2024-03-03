import styled from 'styled-components';
import example from './assets/background.png';
import 'normalize.css';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-image: url(${example}); */
  background-color: ${p => p.theme.colors.blackColor};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;
