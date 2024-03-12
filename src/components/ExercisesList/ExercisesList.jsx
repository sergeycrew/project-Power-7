import * as s from './ExercisesList.styled';

import { useState } from 'react';
import icons from '../../images/sprite.svg';

import { useLocation, useParams } from 'react-router-dom';

import { ModalTrening } from 'components/ModalTrening/ModalTrening';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalExercise } from 'components/ModalExercise/ModalExercise';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryPicked, selectExercises, selectExercisesLimit, selectExercisesPage, selectLoading, selectMaxPage } from '../../redux/exercises/selectorsExercises';
import { ExercisesItem } from '../ExersisesItem/ExercisesItem';
import { changeExercisesLimit, changeExercisesPage, isCategoryPicked, resetExercisesPage } from '../../redux/exercises/sliceExercises';
import { DiaryLoader } from '../DiaryLoader/DiaryLoader';
import { Loader } from '../Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { featchAllExercises } from '../../redux/exercises/operationsExercises';


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

  const exercises = useSelector(selectExercises);
  const isLoading = useSelector(selectLoading)
  // const exercisesLimit = useSelector(selectExercisesLimit)
  const category = useSelector(selectCategoryPicked)
  const exrPage = useSelector(selectExercisesPage)
  const maxPage = useSelector(selectMaxPage)

  const onClick = () => {
    dispatch(isCategoryPicked(''));
    dispatch(resetExercisesPage())
    // dispatch(changeExercisesLimit(-20))
  };

  // const [items, setItems] = useState(Array.from({ length: 20 }));
  const fetchMoreData = () => {

      dispatch(changeExercisesPage(1))
      // dispatch(changeExercisesLimit(20))
      dispatch(featchAllExercises(category))
    };
  

  return (
    <div style={{ position: 'relative' }}>
      <s.BackBtn onClick={() => onClick()}>
        <svg width="20" height="20" stroke="rgb(239, 237, 232, 0.4)">
          <use href={icons + '#icon-arrow-left'} />
        </svg>
        Back
      </s.BackBtn>
     
      <s.MainExercisesContainer> 

    
     <s.ExercisesList>
     
          {exercises?.map((card) => (
            
            <ExercisesItem
              key={card._id}
              card={card}
              toogleModal={toogleModal}
            />
          ))}
        </s.ExercisesList>
        
        {!isLoading && maxPage !== exrPage && (
        <s.BtnMore type='button' onClick={() => fetchMoreData()}>
         Load More</s.BtnMore>
        )}
    
   
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
