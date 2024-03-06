import * as s from './DayExercisesItem.styled';
import icons from '../../images/sprite.svg';
import { DayCommonItemTitle } from '../DayCommonItemTitle/DayCommonItemTitle';

export const DayExerciseItem = () => {
  return (
    <s.ItemExerciseWrapper>
      <s.ProductsContainer>
        <s.ListItem>
          <DayCommonItemTitle>Body Part</DayCommonItemTitle>
          <s.DayExerciseItemContent>Waist</s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Equipment</DayCommonItemTitle>
          <s.DayExerciseItemContent>Black bread</s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Name</DayCommonItemTitle>
          <s.DayExerciseItemContent>Black bread</s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Target</DayCommonItemTitle>
          <s.DayExerciseItemContent>200</s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Burned cal..</DayCommonItemTitle>
          <s.DayExerciseItemContent>200</s.DayExerciseItemContent>
        </s.ListItem>
        <s.ListItem>
          <DayCommonItemTitle>Time</DayCommonItemTitle>
          <s.DayExerciseItemContent>200</s.DayExerciseItemContent>
        </s.ListItem>
      </s.ProductsContainer>
      <s.DeleteButton>
        <s.DeleteIcon>
          <use href={`${icons}#icon-trash`}></use>
        </s.DeleteIcon>
      </s.DeleteButton>
    </s.ItemExerciseWrapper>
  );
};

// export const DayExerciseItem = () => {
//   return (
//     <s.ProductsContainer>
//       <s.ListItem>
//         <DayCommonItemTitle>Body Part</DayCommonItemTitle>
//         <s.DayItemBodyPartContent>Waist</s.DayItemBodyPartContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Equipment</DayCommonItemTitle>
//         <s.DayItemEquipmentContent>Black bread</s.DayItemEquipmentContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Name</DayCommonItemTitle>
//         <s.DayItemNameContent>Black bread</s.DayItemNameContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Target</DayCommonItemTitle>
//         <s.DayTargetContent>200</s.DayTargetContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Burned cal..</DayCommonItemTitle>
//         <s.DayCaloriesContent>200</s.DayCaloriesContent>
//       </s.ListItem>
//       <s.ListItem>
//         <DayCommonItemTitle>Time</DayCommonItemTitle>
//         <s.DayTimeContent>200</s.DayTimeContent>
//       </s.ListItem>

//       <s.DeleteButton>
//         <s.DeleteIcon>
//           <use href={`${icons}#icon-trash`}></use>
//         </s.DeleteIcon>
//       </s.DeleteButton>
//     </s.ProductsContainer>
//   );
// };
