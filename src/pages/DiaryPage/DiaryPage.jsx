import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as s from './DiaryPage.styled';
import { DiaryItem } from '../../components/DiaryItem/DiaryItem';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { DayProductItem } from '../../components/DayProducts/DayProductsItem';
import { DayExerciseItem } from '../../components/DayExercises/DayExercisesItem';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { fetchAllDairyInfo } from '../../redux/diary/diaryOperations';
import {
  selectCurrentDate,
  selectProducts,
  selectExercises,
  selectIsLoadingDiary,
} from '../../redux/diary/diarySelectors';
import { DiaryLoader } from '../../components/DiaryLoader/DiaryLoader';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const products = useSelector(selectProducts);
  const exercises = useSelector(selectExercises);
  let isLoading = useSelector(selectIsLoadingDiary);

  useEffect(() => {
    const currentDateObj = {
      date: currentDate,
    };

    dispatch(fetchAllDairyInfo(currentDateObj));
  }, [dispatch, currentDate]);

  const handleProductDeleted = () => {
    dispatch(fetchAllDairyInfo({ date: currentDate }));
  };

  return (
    <s.Container>
      <s.TitleWrapper>
        <DaySwitch />
        <s.Title>Diary</s.Title>
      </s.TitleWrapper>
      <s.DiaryCommonContainer>
        <s.DiaryItemContainer>
          <DiaryItem title="Products" link="Add product" to="/products">
            <s.ItemsContainer>
              {isLoading ? (
                <DiaryLoader />
              ) : !isLoading && products.length === 0 ? (
                <s.NotFoundText>Not found products</s.NotFoundText>
              ) : (
                products.map((item, index) => (
                  <DayProductItem
                    isFirstItem={index === 0}
                    key={item._id}
                    value={item}
                    onProductDelete={handleProductDeleted}
                  ></DayProductItem>
                ))
              )}
            </s.ItemsContainer>
          </DiaryItem>
          <DiaryItem title="Exercises" link="Add exercise" to="/exercises">
            <s.ItemsContainer>
              {isLoading ? (
                <DiaryLoader />
              ) : !isLoading && exercises.length === 0 ? (
                <s.NotFoundText>Not found exercises</s.NotFoundText>
              ) : (
                exercises.map((item, index) => (
                  <DayExerciseItem
                    isFirstItem={index === 0}
                    key={item._id}
                    value={item}
                  ></DayExerciseItem>
                ))
              )}
            </s.ItemsContainer>
          </DiaryItem>
        </s.DiaryItemContainer>
        <DayDashboard></DayDashboard>
      </s.DiaryCommonContainer>
    </s.Container>
  );
};

export default DiaryPage;
