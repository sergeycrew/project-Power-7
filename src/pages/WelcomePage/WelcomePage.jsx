import { Container } from '../../styles/container';
import * as welcome from './WelcomePage.styled';
import icon from '../../images/sprite/sprite.svg';

const WelcomePage = () => {
  return (
    <Container>
      <welcome.Container>
        <welcome.TitleWrap>
          <welcome.Icon>
            <use href={`${icon}#slogan-line`}></use>
          </welcome.Icon>
          <welcome.Title>
            Transforming your body shape with Power Pulse
          </welcome.Title>
        </welcome.TitleWrap>
        <welcome.LinkList>
          <welcome.ListItem>
            <welcome.StyledLink to="/signUp">Sign Up</welcome.StyledLink>
          </welcome.ListItem>
          <welcome.ListItem>
            <welcome.StyledLink to="/signIn">Sign In</welcome.StyledLink>
          </welcome.ListItem>
        </welcome.LinkList>
      </welcome.Container>
    </Container>
  );
};

export default WelcomePage;
