import { useSelector } from 'react-redux';
import * as s from './SecondaryPageBg.styled';
import { selectCategoryPicked } from '../../redux/exercises/selectorsExercises';

export const SecondaryPageBg = ({children}) => {
  const activeCategory = useSelector(selectCategoryPicked)
  return (
    
    <s.ExrBackgroundImage theme={{
      activeCategory
    }}>
    {children}
   
  </s.ExrBackgroundImage>
  );
};