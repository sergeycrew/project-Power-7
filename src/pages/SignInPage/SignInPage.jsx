import * as signin from './SignInPage.styled';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import { MainContainer, MainSection } from '../WelcomePage/WelcomePage.styled';
import { HomeBackground } from '../../components/HomeBackground/HomeBackground';

const SignInPage = () => {
  return (
    <HomeBackground>
      <MainSection>
        <MainContainer>
          <signin.Title>Sign In</signin.Title>
          <signin.Text>
            Welcome! Please enter your credentials to login to the platform:
          </signin.Text>
          <SignInForm />
          <signin.LinkWrap>
            <signin.PreLinkText>Don’t have an account? </signin.PreLinkText>
            <signin.StyledLink to="/signUp">Sign Up</signin.StyledLink>
          </signin.LinkWrap>
        </MainContainer>
      </MainSection>
    </HomeBackground>
  );
};

export default SignInPage;
