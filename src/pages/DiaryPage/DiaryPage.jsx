import { useEffect, useState } from 'react';
import * as s from './DiaryPage.styled';
import { DairyItem } from '../../components/DairyItem/DairyItem';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { DayProductItem } from '../../components/DayProducts/DayProductsItem';
import { DayExerciseItem } from '../../components/DayExercises/DayExercisesItem';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';

const DiaryPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <s.Container>
      <DaySwitch />
      <s.Title>Diary</s.Title>

      {windowWidth >= 768 ? (
        <s.DairyCommonContainer>
          <s.DairyItemContainer>
            <DairyItem title="Products" link="Add products" to="/products">
              <DayProductItem></DayProductItem>
              <DayProductItem></DayProductItem>
            </DairyItem>
            <DairyItem title="Exercises" link="Add exercises" to="/exercises">
              <DayExerciseItem></DayExerciseItem>
            </DairyItem>
          </s.DairyItemContainer>
          <DayDashboard></DayDashboard>
        </s.DairyCommonContainer>
      ) : (
        <>
          <DayDashboard></DayDashboard>
          <s.DairyItemContainer>
            <DairyItem title="Products" link="Add products" to="/products">
              <DayProductItem></DayProductItem>
            </DairyItem>
            <DairyItem title="Exercises" link="Add exercises" to="/exercises">
              <DayExerciseItem></DayExerciseItem>
            </DairyItem>
          </s.DairyItemContainer>
        </>
      )}
    </s.Container>
  );
};

export default DiaryPage;
