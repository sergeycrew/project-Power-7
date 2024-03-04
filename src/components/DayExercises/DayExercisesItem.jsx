import * as s from './DayExercisesItem.styled';
import icons from '../../images/sprite.svg';

export const DayExerciseItem = () => {
  return (
    <s.ProductsContainer>
      <s.ListItem>
        <s.DayItemTitle>Body Part</s.DayItemTitle>
        <s.DayItemBodyPartContent>Waist</s.DayItemBodyPartContent>
      </s.ListItem>
      <s.ListItem>
        <s.DayItemTitle>Equipment</s.DayItemTitle>
        <s.DayItemEquipmentContent>Black bread</s.DayItemEquipmentContent>
      </s.ListItem>
      <s.ListItem>
        <s.DayItemTitle>Name</s.DayItemTitle>
        <s.DayItemNameContent>Black bread</s.DayItemNameContent>
      </s.ListItem>
      <s.LastItemWrapper>
        <s.ListItem>
          <s.DayItemTitle>Target</s.DayItemTitle>
          <s.DayTargetContent>200</s.DayTargetContent>
        </s.ListItem>
        <s.ListItem>
          <s.DayItemTitle>Burned cal..</s.DayItemTitle>
          <s.DayCaloriesContent>200</s.DayCaloriesContent>
        </s.ListItem>
        <s.ListItem>
          <s.DayItemTitle>Time</s.DayItemTitle>
          <s.DayTimeContent>200</s.DayTimeContent>
        </s.ListItem>
      </s.LastItemWrapper>
      <s.DeleteButton>
        <s.DeleteIcon>
          <use href={`${icons}#icon-trash`}></use>
        </s.DeleteIcon>
      </s.DeleteButton>
    </s.ProductsContainer>
  );
};
