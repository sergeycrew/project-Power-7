import styled from 'styled-components';

export const ExerciseCardWrapper = styled.div`
  max-width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background-repeat: no-repeat;
  background-image: linear-gradient(
      0deg,
      rgba(4, 4, 4, 0.5) 0%,
      rgba(4, 4, 4, 0.5) 100%
    ),
    url(${props => props.photo});

  background-position: 50% 50%;
  background-size: cover;
  

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`;
export const ExerciseDescription = styled.div`
  text-align: center;
  margin-top: 81px;
  margin-bottom: 81px;

  @media screen and (min-width: 768px) {
    margin-top: 77px;
    margin-bottom: 77px;
  }
`;
export const ExerciseTitle = styled.div`
  margin: 0;
  color: #efede8;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  
  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ExerciseText = styled.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;