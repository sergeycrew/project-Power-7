import { useEffect, useState } from 'react';
import * as s from './DiaryPage.styled';
import { DiaryItem } from '../../components/DiaryItem/DiaryItem';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { DayProductItem } from '../../components/DayProducts/DayProductsItem';
import { DayExerciseItem } from '../../components/DayExercises/DayExercisesItem';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';

const DiaryPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <s.Container>
      <s.TitleWrapper>
        <DaySwitch />
        <s.Title>Diary</s.Title>
      </s.TitleWrapper>

      {isMobile ? (
        <>
          <DayDashboard></DayDashboard>
          <s.DiaryItemContainer>
            <DiaryItem title="Products" link="Add products" to="/products">
              {/* {arr.map(({ id, value }) => (
                <DayProductItem key={id} isMobile={isMobile}></DayProductItem>
              ))} */}
              <DayProductItem isMobile={isMobile}></DayProductItem>
              <DayProductItem isMobile={isMobile}></DayProductItem>
            </DiaryItem>
            <DiaryItem title="Exercises" link="Add exercises" to="/exercises">
              <DayExerciseItem></DayExerciseItem>
            </DiaryItem>
          </s.DiaryItemContainer>
        </>
      ) : (
        <s.DiaryCommonContainer>
          <s.DiaryItemContainer>
            <DiaryItem title="Products" link="Add products" to="/products">
              <DayProductItem isMobile={isMobile}></DayProductItem>
              <DayProductItem isMobile={isMobile}></DayProductItem>
            </DiaryItem>
            <DiaryItem title="Exercises" link="Add exercises" to="/exercises">
              <DayExerciseItem></DayExerciseItem>
            </DiaryItem>
          </s.DiaryItemContainer>
          <DayDashboard></DayDashboard>
        </s.DiaryCommonContainer>
      )}
    </s.Container>
  );
};

export default DiaryPage;
