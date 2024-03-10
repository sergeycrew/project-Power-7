import {
  ExercisesList,
  StyledLink,
  MainExercisesContainer,
} from './ExercisesList.styled';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { useEffect } from 'react';
import { useState } from 'react';
import icons from '../../images/sprite.svg';

import { useLocation, useParams, NavLink } from 'react-router-dom';

import { getAllExercises } from '../../jsonFromBd/testApi'; // імпорт запиту до беку  //

import { ModalTrening } from 'components/ModalTrening/ModalTrening';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalExercise } from 'components/ModalExercise/ModalExercise';

export const ExercisesListByCategory = () => {
  const [workoutDoneInfo, setWorkoutDoneInfo] = useState({
    time: 0,
    calories: 0,
  });

  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/exercises';

  const { filter } = useParams();
  const pathname = location.pathname.split('/');
  const category = pathname[2];

  const [exercisesSubCategories, setExercisesSubCategories] = useState(null);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const toogleModal = (exercise) => {
    setIsModalOpen((prevState) => !prevState);
    setSelectedExercise(exercise);
  };

  useEffect(() => {
    const exercisesList = async () => {
      try {
        const exercises = await getAllExercises(); // запит до бекенду за всіма вправами //

        const filtredExercises = exercises.filter(
          (exercise) => exercise[category] === filter
        );

        setExercisesSubCategories(filtredExercises);
      } catch (error) {
        toast.error('Ops...Something went wrong. Please try again.');
        console.log(error.message);
      }
    };
    exercisesList();
  }, [filter]);

  return (
    <div style={{ position: 'relative' }}>
      <StyledLink to={backLinkRef}>
        <svg width="20" height="20" stroke="rgb(239, 237, 232, 0.4)">
          <use href={icons + '#icon-arrow-left'} />
        </svg>
        Back
      </StyledLink>
      <MainExercisesContainer>
        <ExercisesList>
          {exercisesSubCategories?.map((card) => (
            <ExercisesItem
              key={card._id}
              card={card}
              toogleModal={toogleModal}
            />
          ))}
        </ExercisesList>
      </MainExercisesContainer>
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
