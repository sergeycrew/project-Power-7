import styled from 'styled-components';

export const ExercisesLi = styled.li`
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
z-index: 0;
display: block;
position: relative;
border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
height: 206px;
filter: brightness(50%);


  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`
export const ExerciseCardWrapper = styled.div`
 height: 206px;
   @media screen and (min-width: 768px) {
    width: 224px;
   
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  
  }
  

  


`;
export const ExerciseDescription = styled.div`
position: absolute;
z-index: 1;
top: 50%;
left: 50%;
transform: translateX(-50%) translateY(-50%);
  text-align: center;
  /* margin-top: 81px; */
  /* margin-bottom: 81px; */

  @media screen and (min-width: 768px) {
    /* margin-top: 77px; */
    /* margin-bottom: 77px; */
  }
`;
export const ExerciseTitle = styled.div`
  margin: 0;
  color: #efede8;
  text-align: center;
  font-family: 'Roboto', sans-serif;
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