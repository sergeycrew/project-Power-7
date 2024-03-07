import * as signin from './SignInPage.styled';
import { Container } from '../../styles/container';
import { SignInForm } from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <Container>
      <signin.MainContainer>
        <signin.Title>Sign In</signin.Title>
        <signin.Text>
          Welcome! Please enter your credentials to login to the platform:
        </signin.Text>
        <SignInForm />
        <signin.LinkWrap>
          <signin.PreLinkText>Don’t have an account? </signin.PreLinkText>
          <signin.StyledLink to="/signUp">Sign Up</signin.StyledLink>
        </signin.LinkWrap>
      </signin.MainContainer>
    </Container>
  );
};

export default SignInPage;
