import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

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

import {
  selectStatistic,
  selectStatisticLoading,
} from '../../redux/statistic/statisticSelectors';

import { getStatistic } from '../../redux/statistic/statisticOperation';
import { DiaryLoader } from '../DiaryLoader/DiaryLoader';

export const StatisticsInfo = () => {
  const dispatch = useDispatch();
  const statistic = useSelector(selectStatistic);
  const isLoading = useSelector(selectStatisticLoading);

  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);

  const formatNumber = (number) => {
    if (number < 1000) {
      return number;
    } else {
      return (Math.round(number) / 1000).toFixed(0);
    }
  };

  const formatHours = (number) => {
    return (Math.round(number) / 60).toFixed(0);
  };

  const {
    allExercisesVideo,
    allBurnedCalories,
    allUsers,
    allDoneExercisesTime,
    allDoneExercises,
  } = statistic;

  return (
    <InfoContainer>
      {isLoading ? (
        <DiaryLoader />
      ) : (
        <>
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
          <div>
            <Swiper
              modules={[Autoplay, EffectFade]}
              slidesPerView={1}
              effect={'fade'}
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={800}
            >
              <SwiperSlide>
                <Calories>
                  <CaloriesImgBox>
                    <CaloriesImg>
                      <use href={`${sprite}#icon-running-stick-figure`}></use>
                    </CaloriesImg>
                  </CaloriesImgBox>

                  <CaloriesTextBox>
                    <CaloriesNumber>
                      {formatNumber(allBurnedCalories)}+
                    </CaloriesNumber>
                    <CaloriesText>kcal</CaloriesText>
                  </CaloriesTextBox>
                </Calories>
              </SwiperSlide>
              <SwiperSlide>
                <Calories>
                  <CaloriesImgBox>
                    <CaloriesImg>
                      <use href={`${sprite}#icon-running-stick-figure`}></use>
                    </CaloriesImg>
                  </CaloriesImgBox>

                  <CaloriesTextBox>
                    <CaloriesNumber>{allUsers}</CaloriesNumber>
                    <CaloriesText>users</CaloriesText>
                  </CaloriesTextBox>
                </Calories>
              </SwiperSlide>
              <SwiperSlide>
                <Calories>
                  <CaloriesImgBox>
                    <CaloriesImg>
                      <use href={`${sprite}#icon-running-stick-figure`}></use>
                    </CaloriesImg>
                  </CaloriesImgBox>

                  <CaloriesTextBox>
                    <CaloriesNumber>
                      {formatHours(allDoneExercisesTime)}+
                    </CaloriesNumber>
                    <CaloriesText>hours</CaloriesText>
                  </CaloriesTextBox>
                </Calories>
              </SwiperSlide>
              <SwiperSlide>
                <Calories>
                  <CaloriesImgBox>
                    <CaloriesImg>
                      <use href={`${sprite}#icon-running-stick-figure`}></use>
                    </CaloriesImg>
                  </CaloriesImgBox>

                  <CaloriesTextBox>
                    <CaloriesNumber>
                      {formatNumber(allDoneExercises)}
                    </CaloriesNumber>
                    <CaloriesText>training</CaloriesText>
                  </CaloriesTextBox>
                </Calories>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </InfoContainer>
  );
};
