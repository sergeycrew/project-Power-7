import { useDispatch, useSelector } from 'react-redux';
import * as s from './ExercisesNav.styled';
  

import { changeFilter, isCategoryPicked } from '../../redux/exercises/sliceExercises';
import { selectCategoryPicked, selectFilter } from '../../redux/exercises/selectorsExercises';
  
  export const ExercisesNav = () => {
  
      const dispatch = useDispatch();
      const activeFilter = useSelector(selectFilter);
      const activeCategory = useSelector(selectCategoryPicked)
    
      const handleFilterClick = (filter) => {
        dispatch(changeFilter(filter));
        dispatch(isCategoryPicked(''));
      };

   
      return (
        <s.NavWrap>
          {activeCategory ? (
            <s.FilterTitle>{activeCategory}</s.FilterTitle>
          ) : (
            <s.Title>Exercises</s.Title>
          )}
    
          <s.NavLinkWrap>
            <s.NavButton type='button' onClick={() => handleFilterClick('Body parts')}
            theme={{kostil: activeFilter === 'Body parts' ? undefined : "true" }}>
              Body parts
            </s.NavButton>
            <s.NavButton type='button' onClick={() => handleFilterClick('Muscles')}
            theme={{kostil: activeFilter === 'Muscles' ? undefined : "true"}}>
              Muscles
            </s.NavButton>
            <s.NavButton type='button' onClick={() => handleFilterClick('Equipment')}
            theme={{kostil: activeFilter === 'Equipment' ? undefined : "true"}}>
              Equipment
            </s.NavButton>
          </s.NavLinkWrap>
        </s.NavWrap>
      );
   
  };