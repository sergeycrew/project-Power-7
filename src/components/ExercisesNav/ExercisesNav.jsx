import { useDispatch, useSelector } from 'react-redux';
import * as s from './ExercisesNav.styled';
  
  import { useParams } from 'react-router-dom';
import { changeFilter } from '../../redux/exercises/sliceExercises';
import { selectCategoryPicked, selectFilter } from '../../redux/exercises/selectorsExercises';
  
  export const ExercisesNav = () => {
    // const { filter } = useParams();
  
    // return (
    //   <NavWrap>
    //   //   {filter ? (
      //     <FilterTitle> {filter} </FilterTitle>
      //   ) : (
      //     <Title> Exercises </Title>
      //   )}
  
      //   <NavLinkWrap>
      //     <Link to="bodyPart">Body parts</Link>
      //     <Link to="target">Muscles</Link>
      //     <Link to="equipment">Equipment</Link>
      //   </NavLinkWrap>
      // </NavWrap>
      const dispatch = useDispatch();
      // const activeFilter = useSelector(selectFilter);
      const activeCategory = useSelector(selectCategoryPicked)
    
      const handleFilterClick = (filter) => {
        dispatch(changeFilter(filter));
      };

    
      return (
        <s.NavWrap>
          {activeCategory ? (
            <s.FilterTitle>{activeCategory}</s.FilterTitle>
          ) : (
            <s.Title>Exercises</s.Title>
          )}
    
          <s.NavLinkWrap>
            <s.NavButton type='button' onClick={() => handleFilterClick('Body parts')}>
              Body parts
            </s.NavButton>
            <s.NavButton type='button' onClick={() => handleFilterClick('Muscles')}>
              Muscles
            </s.NavButton>
            <s.NavButton type='button' onClick={() => handleFilterClick('Equipment')}>
              Equipment
            </s.NavButton>
          </s.NavLinkWrap>
        </s.NavWrap>
      );
   
  };