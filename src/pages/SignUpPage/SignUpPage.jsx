// import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import * as s from './SignUpPage.styled';

const SignUpPage = () => {
  return (
    <s.Container>
      <s.Title>Sign Up</s.Title>
      {/* <SignUpForm /> */}
      <s.StyledLink to="/signIn">Sign In</s.StyledLink>
    </s.Container>
  );
};

export default SignUpPage;
