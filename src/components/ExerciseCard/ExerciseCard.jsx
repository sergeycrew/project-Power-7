
import * as s from './ExerciseCard.styled';
import { featchAllExercises } from '../../redux/exercises/operationsExercises';
import { useDispatch } from 'react-redux';
import { isCategoryPicked } from '../../redux/exercises/sliceExercises';
import { useEffect, useState } from 'react';
import { DiaryLoader } from '../DiaryLoader/DiaryLoader';

export const ExerciseCard = ({ title, filter, photo }) => {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (photo) {
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        setImageLoaded(true);
        setTextVisible(true); 
      };
    }
  }, [photo]);

  const onClick = (title) => {
    dispatch(featchAllExercises(title));
    dispatch(isCategoryPicked(title));
  };

  return (
    <s.ExercisesLi onClick={() => onClick(title)}>
      <s.ExerciseCardWrapper >
      {!photo || !imageLoaded ? ( 
          <DiaryLoader /> 
        ) : (<s.Image src={photo} alt={title}  />)}
 
      
        <s.ExerciseDescription style={{ visibility: textVisible ? 'visible' : 'hidden' }}>
          <s.ExerciseTitle >
            {title}
            <s.ExerciseText>{filter}</s.ExerciseText>
          </s.ExerciseTitle>
        </s.ExerciseDescription>
      </s.ExerciseCardWrapper>
    </s.ExercisesLi>
  );
};
     // <s.Image src={photo ? photo : images} alt={title}  />)}