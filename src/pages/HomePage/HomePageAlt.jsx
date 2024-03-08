import { Container } from 'styles/container';
import {
  BtnHomeDesctop,
  HomeSection,
  Title,
  TitleContainer,
  TitleContainerTablet,
  StyledLink,
  SvgCircle,
  BtnHomeTablet,
} from './HomePageAlt.styled';
import { HomeBackground } from 'components/HomeBackground/HomeBackground';
import sprite from 'images/sprite/sprite.svg';

const color = {
  backgroundColor: '#e6533c',
}

export const HomePage = () => {
  return (
    <Container>
      <HomeSection>
        <TitleContainer>
          <SvgCircle>
            <use href={`${sprite}#slogan-line`}></use>
          </SvgCircle>
          <Title>Transforming your body shape with Power Pulse</Title>
          <BtnHomeDesctop>
            <StyledLink style={color} to="/signUp">Sign Up</StyledLink>
            <StyledLink to="/signIn">Sign In</StyledLink>
          </BtnHomeDesctop>
        </TitleContainer>
        <TitleContainerTablet>
          <Title>Transforming your body shape with Power Pulse</Title>
          <SvgCircle>
            <use href={`${sprite}#slogan-line`}></use>
          </SvgCircle>
          <BtnHomeTablet>
            <StyledLink style={color} to="/signUp">Sign Up</StyledLink>
            <StyledLink to="/signIn">Sign In</StyledLink>
          </BtnHomeTablet>
        </TitleContainerTablet>
        <HomeBackground/>
      </HomeSection>
    </Container>
  );
};