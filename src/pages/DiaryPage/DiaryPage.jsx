import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as s from './DiaryPage.styled';
import { DiaryItem } from '../../components/DiaryItem/DiaryItem';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { DayProductItem } from '../../components/DayProducts/DayProductsItem';
import { DayExerciseItem } from '../../components/DayExercises/DayExercisesItem';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { fetchAllDairyInfo } from '../../redux/diary/diaryOperations';
import { selectCurrentDate } from '../../redux/diary/diarySelectors';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);

  useEffect(() => {
    const currentDateObj = {
      date: currentDate,
    };

    dispatch(fetchAllDairyInfo(currentDateObj));
  }, [dispatch, currentDate]);
  return (
    <s.Container>
      <s.TitleWrapper>
        <DaySwitch />
        <s.Title>Diary</s.Title>
      </s.TitleWrapper>
      <s.DiaryCommonContainer>
        <s.DiaryItemContainer>
          <DiaryItem title="Products" link="Add products" to="/products">
            {/* <s.NotFoundText>Not found products</s.NotFoundText> */}
            <DayProductItem isFirstItem={true}></DayProductItem>
            <DayProductItem isFirstItem={false}></DayProductItem>
            <DayProductItem isFirstItem={false}></DayProductItem>
            <DayProductItem isFirstItem={false}></DayProductItem>
          </DiaryItem>
          <DiaryItem title="Exercises" link="Add exercises" to="/exercises">
            {/* <s.NotFoundText>Not found exercises</s.NotFoundText> */}
            <DayExerciseItem isFirstItem={true}></DayExerciseItem>
            <DayExerciseItem isFirstItem={false}></DayExerciseItem>
          </DiaryItem>
        </s.DiaryItemContainer>
        <DayDashboard></DayDashboard>
      </s.DiaryCommonContainer>
    </s.Container>
  );
};

export default DiaryPage;
