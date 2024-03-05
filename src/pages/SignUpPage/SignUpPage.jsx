import * as signup from './SignUpPage.styled';
import { Container } from '../../styles/container';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <Container>
      <signup.MainContainer>
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
      </signup.MainContainer>
    </Container>
  );
};

export default SignUpPage;
