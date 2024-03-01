
import * as s from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <s.Container>
      <s.Title>Welcome Page</s.Title>
      <s.StyledLink to="/signUp">Sign Up</s.StyledLink>
      <s.StyledLink to="/signIn">Sign In</s.StyledLink>
   
    </s.Container>
  );
};

export default WelcomePage;