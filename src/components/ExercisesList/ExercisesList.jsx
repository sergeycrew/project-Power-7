import * as s from './ExercisesList.styled';

import { useState } from 'react';
import icons from '../../images/sprite.svg';

import { useLocation, useParams } from 'react-router-dom';



import { ModalTrening } from 'components/ModalTrening/ModalTrening';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalExercise } from 'components/ModalExercise/ModalExercise';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercises} from '../../redux/exercises/selectorsExercises';
import { ExercisesItem } from '../ExersisesItem/ExercisesItem';
import { isCategoryPicked } from '../../redux/exercises/sliceExercises';

export const ExercisesListByCategory = () => {
  const dispatch = useDispatch();
  const [workoutDoneInfo, setWorkoutDoneInfo] = useState({
    time: 0,
    calories: 0,
  });

 




  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const toogleModal = (exercise) => {
    setIsModalOpen((prevState) => !prevState);
    setSelectedExercise(exercise);
  };
 

  const exercises = useSelector(selectExercises)

  
  const onClick = () => {
    ;
    dispatch(isCategoryPicked(''));
  };

  return (
    <div style={{ position: 'relative' }}>
      <s.BackBtn onClick={() => onClick()} >
        <svg width="20" height="20" stroke="rgb(239, 237, 232, 0.4)">
          <use href={icons + '#icon-arrow-left'} />
        </svg>
        Back
      </s.BackBtn>
      <s.MainExercisesContainer>
        <s.ExercisesList>
          {exercises?.map((card) => (
            <ExercisesItem key={card._id}
            card={card}
            toogleModal={toogleModal}/>
             
            
          ))}
        </s.ExercisesList>
      </s.MainExercisesContainer>
      {isModalOpen && (
        <ModalTrening
          onToogle={toogleModal}
          exerciseInfo={selectedExercise}
          setIsSuccessOpen={() => setIsSuccessOpen((prevState) => !prevState)}
          setWorkoutDoneInfo={setWorkoutDoneInfo}
        />
      )}
      {isSuccessOpen && (
        <ModalExercise
          onClose={() => setIsSuccessOpen((prevState) => !prevState)}
          time={workoutDoneInfo.time}
          calories={workoutDoneInfo.calories}
        />
      )}
    </div>
  );
};
