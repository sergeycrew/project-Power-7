import * as s from './ExerciseCard.styled';

export const ExerciseCard = ({ title, filter, photo }) => {
  return (
   <s.ExercisesLi>
   <s.ExerciseCardWrapper photo={photo}>
   <s.ExerciseDescription>
     <s.ExerciseTitle>
       {title}
       <s.ExerciseText>{filter}</s.ExerciseText>
     </s.ExerciseTitle>
   </s.ExerciseDescription>
 </s.ExerciseCardWrapper></s.ExercisesLi>
  );
};