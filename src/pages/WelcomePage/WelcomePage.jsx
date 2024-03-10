import { HomeBackground } from '../../components/HomeBackground/HomeBackground';
import * as welcome from './WelcomePage.styled';
import icon from '../../images/sprite/sprite.svg';
import { GoogleSignIn } from '../../components/GoogleSignIn/GoogleSignIn';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import axios from 'axios';
//import { useLocation } from 'react-router-dom';

const WelcomePage = () => {

  //const params = useLocation();
   const dispatch = useDispatch();
  const url = window.location;
  const accessToken = new URLSearchParams(url.search).get('accesstoken');
  const refreshToken = new URLSearchParams(url.search).get('refreshtoken');

  console.log(accessToken, refreshToken)
  
  useEffect(() => {
    const refetch = async () => {
      if (accessToken && refreshToken) {
        dispatch(selectToken(refreshToken));

        try {
          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        } catch (error) {
          console.error(error);
        }
      }
    };

    refetch();
  }, [dispatch, accessToken, refreshToken,]);

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
              <welcome.ListItem>
                <GoogleSignIn/>
              </welcome.ListItem>
            </welcome.LinkList>
          </welcome.TitleBox>
        </welcome.MainContainer>
      </welcome.MainSection>
    </HomeBackground>
  );
};

export default WelcomePage;
