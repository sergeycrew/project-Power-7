import {
  CategoriesList,
  CardLink,
  PaginationBtn,
  PaginationList,
  PaginationItem,
} from './ExercisesCategories.styled';
import { useEffect } from 'react';
import { useState } from 'react';

import icons from '../../images/sprite.svg';

import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';


import { fetchExercisesCategory } from '../../redux/exercises/operationsExercises';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectFilter } from '../../redux/exercises/selectorsExercises';

// import { toast } from 'react-toastify';

// import throttle from 'lodash.throttle';

export const ExercisesCategories = () => {
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


  const [exercisesCategories, setExercisesCategories] = useState(null);

  useEffect(() => {
  
    dispatch(fetchExercisesCategory());
  }, [dispatch]);


  useEffect(() => {
    // setExercisesCategories(categories);
    const filteredCategories = categories.filter(category => category.filter === activeFilter);
    setExercisesCategories(filteredCategories);
  }, [categories, activeFilter]);

  return (
   
      <CategoriesList>
        {exercisesCategories?.map(card => (
          <li key={card._id}>
  
              <ExerciseCard
                filter={card.filter}
                title={card.name}
                photo={card.imgURL}
              />
      
          </li>
        ))}
      </CategoriesList>

     
  
  );

     
   
};
