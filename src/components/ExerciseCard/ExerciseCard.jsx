import { useEffect, useState } from 'react';
import * as s from './ExerciseCard.styled';
import { featchAllExercises } from '../../redux/exercises/operationsExercises';
import { useDispatch } from 'react-redux';
import { isCategoryPicked } from '../../redux/exercises/sliceExercises';

export const ExerciseCard = ({ title, filter, photo }) => {
  const dispatch = useDispatch();

  const onClick = (title) => {
    dispatch(featchAllExercises(title));
    dispatch(isCategoryPicked(title));
  };

  return (
    <s.ExercisesLi onClick={() => onClick(title)}>
      <s.ExerciseCardWrapper photo={photo}>
        <s.ExerciseDescription>
          <s.ExerciseTitle>
            {title}
            <s.ExerciseText>{filter}</s.ExerciseText>
          </s.ExerciseTitle>
        </s.ExerciseDescription>
      </s.ExerciseCardWrapper>
    </s.ExercisesLi>
  );
};
