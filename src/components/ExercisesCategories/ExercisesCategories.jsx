import * as s from './ExercisesCategories.styled';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';

import icons from '../../images/sprite.svg';

import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { fetchExercisesCategory } from '../../redux/exercises/operationsExercises';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategory,
  // selectCategoryPicked,
  selectFilter,
} from '../../redux/exercises/selectorsExercises';
import { ExercisesListByCategory } from '../ExercisesList/ExercisesList';

// import { toast } from 'react-toastify';

// import throttle from 'lodash.throttle';

export const ExercisesCategories = ({handleSetExName}) => {
  // const location = useLocation();

  // const [currentPage, setCurrentPage] = useState(1);

  // const [recordsPerPage, setRecordsPage] = useState(10);.////////////////////////////////////////////////////////////////

  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const exercises = exercisesCategories?.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(exercisesCategories?.length / recordsPerPage);
  // const numbers = Array.from({ length: npage }, (_, index) => index + 1);

  // const filterArrayByQuery = (arr, query) => arr.filter(item => item.filter === query);

  // const changeCurrentPage = n => {
  //   setCurrentPage(n);
  // };

  // const getRecordsPerPage = () => {
  //   const widthScreen = window.innerWidth;

  //   if (widthScreen >= 768 && widthScreen < 1440) {
  //     setRecordsPage(9);
  //   } else {
  //     setRecordsPage(10);
  //   }
  // };

  // const ExampleComponent = () => {
  //   // Проверка размера экрана от 0 до 768px
  //   const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1200px)')}

  // const getRecordsPerPageThrottled = throttle(getRecordsPerPage, 500);

  // useEffect(() => {
  //   getRecordsPerPage();

  //   window.addEventListener('resize', getRecordsPerPageThrottled);

  //   const CategoriesList = async () => {
  //     try {
  //       const allCategories = await getExercisesCategory();
  //       const categories = filterArrayByQuery(allCategories, query);
  //       setExercisesCategories(categories);
  //     } catch (error) {
  //       toast.error('Ops...Something went wrong. Please try again.');
  //       console.log(error.message);
  //     }
  //   };
  //   CategoriesList();

  //   return () => {
  //     window.removeEventListener('resize', getRecordsPerPageThrottled);
  //   };
  // }, [query]);
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectFilter);
  const categories = useSelector(selectCategory);
  // const categoryPicked = useSelector(selectCategoryPicked);

  const [exercisesCategories, setExercisesCategories] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchExercisesCategory());
  }, [dispatch]);

  useEffect(() => {
    // setExercisesCategories(categories);
    const filteredCategories = categories.filter(
      (category) => category.filter === activeFilter
    );
    setExercisesCategories(filteredCategories);
  }, [categories, activeFilter]);

  // const handleItemClick = useCallback((card) => {
  //   dispatch(selectCategoryPicked(true));

  // }, [dispatch]);

  // const handleItemClick = (card) => {
  //   setSelectedCategory(card);
  // };

 
  return (
    <div>
      
        <s.CategoriesList>
          {exercisesCategories?.map((card) => (
            <ExerciseCard
              key={card._id} 
              handleSetExName={handleSetExName}
              
              filter={card.filter}
              title={card.name}
              photo={card.imgURL}
            />
          ))}
        </s.CategoriesList>
      )
    </div>
  );
};
