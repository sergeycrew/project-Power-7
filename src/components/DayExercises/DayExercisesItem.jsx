import { useDispatch, useSelector } from 'react-redux';
import * as s from './DayExercisesItem.styled';
import icons from '../../images/sprite/sprite.svg';
import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';
import { deleteExercise } from '../../redux/diary/diaryOperations';
import { selectCurrentDate } from '../../redux/diary/diarySelectors';

export const DayExerciseItem = ({ isFirstItem, value }) => {
  const dispatch = useDispatch();
  let currentTime = useSelector(selectCurrentDate);

  const objForDelete = {
    date: currentTime,
    exerciseId: value._id,
    calories: value.calories,
    time: value.time,
  };

  return (
    <s.ItemExerciseWrapper>
      <s.ProductsContainer>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Body Part
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.bodyPart}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Equipment
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.equipment}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Name
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.name}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Target
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>
            {value.exerciseId.target}
          </s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Burned calories
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>{value.calories}</s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle isFirstItem={isFirstItem}>
            Time
          </DayCommonItemTitle>
          <s.DayExerciseItemContent>{value.time}</s.DayExerciseItemContent>
        </s.ListItem>
      </s.ProductsContainer>
      <s.DeleteButton
        type="button"
        onClick={() => dispatch(deleteExercise(objForDelete))}
        aria-label="delete=button"
      >
        <s.DeleteIcon>
          <use href={`${icons}#trash`}></use>
        </s.DeleteIcon>
      </s.DeleteButton>
    </s.ItemExerciseWrapper>
  );
};
