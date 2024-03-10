import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';


import * as s from './ExercisesPage.styled';

import { useDispatch, useSelector } from 'react-redux';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';

import { ExercisesListByCategory } from '../../components/ExercisesList/ExercisesList';
import { selectCategoryPicked } from '../../redux/exercises/selectorsExercises';
import { Container } from 'styles/container';
import { SecondaryPageBg } from '../../components/SecondaryPageBg/SecondaryPageBg';

const ExercisesPage = () => {
//   const location = useLocation();


// const [exercisesCategories, setExercisesCategories] = useState(null);
// const [isCategoryPicked, setIsCategoryPicked] = useState(false); 

// const [activeFilter, setActiveFilter] = useState('Body parts');









const activeCategory = useSelector(selectCategoryPicked)
  return (

    
   
      <Container style={ {backgroundColor: 'transparent' }}>
    
        <s.ExercisesPageWrap>
          <ExercisesNav/>
          {activeCategory ?  <SecondaryPageBg><ExercisesListByCategory /> </SecondaryPageBg> : <ExercisesCategories  />}
      </s.ExercisesPageWrap>

      </Container>
       
  );
};

export default ExercisesPage;