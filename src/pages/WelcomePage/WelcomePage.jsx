import { HomeBackground } from '../../components/HomeBackground/HomeBackground';
import * as welcome from './WelcomePage.styled';
import icon from '../../images/sprite/sprite.svg';
import { GoogleSignInButton } from '../../components/GoogleSignIn/GoogleSignIn';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GoogleSignIn } from '../../redux/auth/authOperation';

const WelcomePage = () => {
  const dispatch = useDispatch();
  const url = window.location;
  const accessToken = new URLSearchParams(url.search).get('accesstoken');
  const refreshToken = new URLSearchParams(url.search).get('refreshtoken');

  useEffect(() => {
    const refetch = async () => {
      if (accessToken && refreshToken) {
        dispatch(GoogleSignIn({ tokens: { accessToken, refreshToken } }));
      }
    };

    refetch();
  }, [dispatch, accessToken, refreshToken]);

  const accentImg = (
    <welcome.Icon>
      <use href={`${icon}#slogan-line`}></use>
    </welcome.Icon>
  );

  return (
    <HomeBackground>
      <welcome.MainSection>
        <welcome.MainContainer>
          <welcome.TitleBox>
            <welcome.Title>
              Transforming your{' '}
              <welcome.AccentWord>
                body
                {accentImg}
              </welcome.AccentWord>{' '}
              shape with Power Pulse
            </welcome.Title>

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
              <welcome.ListItem>
                <GoogleSignInButton />
              </welcome.ListItem>
            </welcome.LinkList>
          </welcome.TitleBox>
        </welcome.MainContainer>
      </welcome.MainSection>
    </HomeBackground>
  );
};

export default WelcomePage;
