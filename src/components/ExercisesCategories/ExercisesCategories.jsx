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

import { Outlet, useLocation } from 'react-router-dom';
import { ExerciseCard } from 'components/ExerciseCard/ExerciseCard';

import { getExercisesCategory } from '../../jsonFromBd/testApi'; // to do //

import { toast } from 'react-toastify';

import throttle from 'lodash.throttle';
import { exercises } from '../../redux/exercises/operations';

export const ExercisesCategories = ({ query }) => {
  const location = useLocation();

  const [exercisesCategories, setExercisesCategories] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [recordsPerPage, setRecordsPage] = useState(10);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const allExercises = exercisesCategories?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(exercisesCategories?.length / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, index) => index + 1);

  const filterArrayByQuery = (arr, query) => arr.filter(item => item.filter === query);

  const changeCurrentPage = n => {
    setCurrentPage(n);
  };

  const getRecordsPerPage = () => {
    const widthScreen = window.innerWidth;

    if (widthScreen >= 768 && widthScreen < 1440) {
      setRecordsPage(9);
    } else {
      setRecordsPage(10);
    }
  };

  const getRecordsPerPageThrottled = throttle(getRecordsPerPage, 500);

  useEffect(() => {
    getRecordsPerPage();

    window.addEventListener('resize', getRecordsPerPageThrottled);

    const CategoriesList = async () => {
      try {
        // const allCategories = await getExercisesCategory(); 
        const allCategories = await exercises(); 
        const categories = filterArrayByQuery(allCategories, query);
        setExercisesCategories(categories);
      } catch (error) {
        toast.error('Ops...Something went wrong. Please try again.');
        console.log(error.message);
      }
    };
    CategoriesList();

    return () => {
      window.removeEventListener('resize', getRecordsPerPageThrottled);
    };
  }, [query]);

  return (
    <>
      <CategoriesList>
        {allExercises?.map(card => (
          <li key={card._id}>
            <CardLink to={`${card.name}`} state={{ from: location }}>
              <ExerciseCard
                filter={card.filter}
                title={card.name}
                photo={card.imgURL}
              />
            </CardLink>
          </li>
        ))}
      </CategoriesList>

      {npage > 1 && (
        <PaginationList>
          {numbers.map((n, i) => (
            <PaginationItem key={i}>
              <PaginationBtn onClick={() => changeCurrentPage(n)}> 
                {n === currentPage ? (
                  <svg width="14" height="14">
                    <use href={icons + '#icon-pagination'} />
                  </svg>
                ) : (
                  <svg width="14" height="14">
                    <use href={icons + '#icon-apple'} />   
                  </svg>
                )}
              </PaginationBtn>
            </PaginationItem>
          ))}
        </PaginationList>   // to do замінити ікоку //
      )}

        <Outlet />
    </>
  );
};
