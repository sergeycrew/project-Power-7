import styled from 'styled-components';


export const BackBtn = styled.button`
background-color: inherit;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0;
  color: rgb(239, 237, 232, 0.4);
  text-decoration: none;
  font-weight: 500;
  position: absolute;
  top: -140px;

`;
export const BtnMore = styled.button`
  display: flex;
  color: ${(p) => p.theme.colors.orangeColor};
  border: none;
  position: relative;
  background-color: transparent;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;

  width: 166px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  padding: 10px 27px 10px 27px;

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  &:hover {
    border-color: ${p => p.theme.colors.hoverColor};
  }

`;
export const MainExercisesContainer = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      #ef8964 0%,
      #ef8964 30%,
      #ef8964 50%,
      #ef8964 70%,
      #ef8964 100%
    );
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`;

export const ExercisesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;

export const ExercisesItem = styled.li`
  max-width: 335px;
  width: 100%;
  min-height: 141px;
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 16px 16px;
  @media (min-width: 1440px) {
    max-width: 405px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    margin-bottom: 27px;
  }
`;

export const WorkoutTitle = styled.h3`
  color: #FFFFFF;
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CaloriesIcon = styled.svg`
  background-color: #efa082;
  fill:#ffffff;
  padding: 4px;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ExercisesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ExercisesTitle = styled.h2`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #efede8;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  width: 250px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    width: 330px;
  }
`;

export const DataInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  & li {
    color: rgba(239, 237, 232, 0.4);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    @media screen and (min-width: 768px) {
    }
    & span {
      color: #efede8;
      margin-left: 4px;
    }
  }
`;

export const StartIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const Start = styled.span`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;