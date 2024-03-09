import sprite from 'images/sprite/sprite.svg';
import {
  InfoContainer,
  Tutorial,
  TutorialImg,
  TutorialText,
  Calories,
  TutorialTextBox,
  TutorialNumber,
  CaloriesTextBox,
  CaloriesNumber,
  CaloriesText,
  CaloriesImgBox,
  CaloriesImg,
  TutorialImgBox,
} from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
  return (
    <InfoContainer>
      <Tutorial>
        <TutorialImgBox>
          <TutorialImg>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </TutorialImg>
        </TutorialImgBox>

        <TutorialTextBox>
          <TutorialNumber>350+</TutorialNumber>
          <TutorialText>Video tutorial</TutorialText>
        </TutorialTextBox>
      </Tutorial>
      <Calories>
        <CaloriesImgBox>
          <CaloriesImg>
            <use href={`${sprite}#icon-running-stick-figure`}></use>
          </CaloriesImg>
        </CaloriesImgBox>

        <CaloriesTextBox>
          <CaloriesNumber>500</CaloriesNumber>
          <CaloriesText>cal</CaloriesText>
        </CaloriesTextBox>
      </Calories>
    </InfoContainer>
  );
};
