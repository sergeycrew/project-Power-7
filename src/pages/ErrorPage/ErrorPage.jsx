import * as notfound from './ErrorPage.styled';
import { Container } from 'styles/container';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <notfound.ErrorWrap>
        <notfound.ErrorBox>
          <notfound.ErrorTitle>404</notfound.ErrorTitle>
          <notfound.ErrorText>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </notfound.ErrorText>
          <notfound.ErrorBtn type="button" onClick={() => navigate('/')}>
            Go Home
          </notfound.ErrorBtn>
        </notfound.ErrorBox>
      </notfound.ErrorWrap>
    </Container>
  );
};

export default ErrorPage;
