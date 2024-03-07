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
  // const currentDateObj = {
  //   date: currentDate
  // };

  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const currentDateObj = {
      date: currentDate,
    };

    // const handleResize = () => {
    //   setIsMobile(window.innerWidth < 768);
    // };
    dispatch(fetchAllDairyInfo(JSON.stringify(currentDateObj)));
    // window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
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
            <DayProductItem></DayProductItem>
            <DayProductItem></DayProductItem>
            {/* <DayProductItem isMobile={isMobile}></DayProductItem> */}
          </DiaryItem>
          <DiaryItem title="Exercises" link="Add exercises" to="/exercises">
            <DayExerciseItem></DayExerciseItem>
          </DiaryItem>
        </s.DiaryItemContainer>
        <DayDashboard></DayDashboard>
      </s.DiaryCommonContainer>
    </s.Container>
  );
};

export default DiaryPage;
