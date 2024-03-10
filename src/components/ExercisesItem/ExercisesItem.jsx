import {
    ExercisesItemWrapper,
    InfoContainer, 
    WorkoutTitle,
    CaloriesIcon,
    ExercisesContainer,
    ExercisesTitle,
    DataInfo,
    Start, 
    StartIcon, 
} from './ExercisesItem.styled';

import icons from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';

export const ExercisesItem = ({ card, toogleModal }) => {
  return (
    <ExercisesItemWrapper key={card._id}>
      <InfoContainer>
        <WorkoutTitle>WORKOUT</WorkoutTitle>
        <NavLink
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => toogleModal(card)}
        >
          <Start>Start</Start>
          <StartIcon>
            <svg fill="#efede8">
              {' '}
              <use href={icons + '#icon-arrow-right'}></use>
            </svg>
          </StartIcon>
        </NavLink>
      </InfoContainer>
      <ExercisesContainer>
        <CaloriesIcon>
          <svg fill="#ffffff">
            {' '}
            <use href={icons + '#icon-running-figure'}></use>
          </svg>
        </CaloriesIcon>
        <ExercisesTitle>{card.name}</ExercisesTitle>
      </ExercisesContainer>
      <DataInfo>
        <li>
          Burned calories:
          <span>{card.burnedCalories}</span>
        </li>
        <li>
          Body part: <span>{card.bodyPart}</span>
        </li>
        <li>
          Target:<span>{card.target}</span>
        </li>
      </DataInfo>
    </ExercisesItemWrapper>
  );
};
