import { HomeBackground } from '../../components/HomeBackground/HomeBackground';
import * as welcome from './WelcomePage.styled';
import icon from '../../images/sprite/sprite.svg';

const WelcomePage = () => {
  return (
    <HomeBackground>
      <welcome.MainSection>
        <welcome.MainContainer>
          <welcome.TitleBox>
            <welcome.Title>
              Transforming your body shape with Power Pulse
            </welcome.Title>
            <welcome.Icon>
              <use href={`${icon}#slogan-line`}></use>
            </welcome.Icon>
            <welcome.LinkList>
              <welcome.ListItem>
                <welcome.StyledSignUpLink to="/signUp">
                  Sign Up
                </welcome.StyledSignUpLink>
              </welcome.ListItem>
              <welcome.ListItem>
                <welcome.StyledSignInLink to="/signIn">
                  Sign In
                </welcome.StyledSignInLink>
              </welcome.ListItem>
            </welcome.LinkList>
          </welcome.TitleBox>
        </welcome.MainContainer>
      </welcome.MainSection>
    </HomeBackground>
  );
};

export default WelcomePage;
