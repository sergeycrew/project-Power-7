import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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

import { selectStatistic } from '../../redux/statistic/statisticSelectors';

import { getStatistic } from '../../redux/statistic/statisticOperation';

export const StatisticsInfo = () => {
  const dispatch = useDispatch();
  const statistic = useSelector(selectStatistic);

  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);

  const formatNumber = (number) => {
    if (number < 1000) {
      return number;
    } else {
      return (Math.round(number) / 1000).toFixed(1);
    }
  };

  const { allExercisesVideo, allBurnedCalories } = statistic;

  return (
    <InfoContainer>
      <Tutorial>
        <TutorialImgBox>
          <TutorialImg>
            <use href={`${sprite}#icon-Polygon-1`}></use>
          </TutorialImg>
        </TutorialImgBox>

        <TutorialTextBox>
          <TutorialNumber>{allExercisesVideo}</TutorialNumber>
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
          <CaloriesNumber>{formatNumber(allBurnedCalories)}</CaloriesNumber>
          <CaloriesText>kcal</CaloriesText>
        </CaloriesTextBox>
      </Calories>
    </InfoContainer>
  );
};
