import * as signup from './SignUpPage.styled';

import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { MainContainer, MainSection } from '../WelcomePage/WelcomePage.styled';
import { HomeBackground } from '../../components/HomeBackground/HomeBackground';

const SignUpPage = () => {
  return (
    <HomeBackground>
      {/* <signup.SignUpShadow> */}
      <MainSection>
        <MainContainer>
          <signup.Title>Sign Up</signup.Title>
          <signup.Text>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </signup.Text>
          <SignUpForm />
          <signup.LinkWrap>
            <signup.PreLinkText>Already have an account? </signup.PreLinkText>
            <signup.StyledLink to="/signIn">Sign In</signup.StyledLink>
          </signup.LinkWrap>
        </MainContainer>
      </MainSection>
      {/* </signup.SignUpShadow> */}
    </HomeBackground>
  );
};

export default SignUpPage;
