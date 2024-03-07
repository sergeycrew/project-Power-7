import { useSelector } from 'react-redux';
import {
  selectBurnedCalories,
  selectConsumedCalories,
  selectDoneExercisesTime,
} from '../../redux/diary/diarySelectors';
import icons from '../../images/sprite/sprite.svg';
import { DashboardCard } from './DashboardCard/DashboardCard';
import * as s from './DayDashboard.styled';

export const DayDashboard = () => {
  let burnedCalories = useSelector(selectBurnedCalories);
  let consumedCalories = useSelector(selectConsumedCalories);
  let doneExercisesTime = useSelector(selectDoneExercisesTime);
  let sportRemaining = 110 - doneExercisesTime;

  return (
    <s.DashboardWrapper>
      <s.DashboardList>
        <DashboardCard
          subtitle="Daily calorie intake"
          icon={`${icons}#food`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Daily physical activity"
          icon={`${icons}#dumbbell`}
        >
          110 min
        </DashboardCard>
        <DashboardCard subtitle="Сalories consumed" icon={`${icons}#apple`}>
          {consumedCalories}
        </DashboardCard>
        <DashboardCard subtitle="Сalories burned" icon={`${icons}#fire`}>
          {burnedCalories}
        </DashboardCard>
        <DashboardCard
          subtitle="Calories remaining"
          icon={`${icons}#bubble`}
        ></DashboardCard>
        <DashboardCard subtitle="Sports remaining" icon={`${icons}#figure`}>
          {`${sportRemaining} min`}
        </DashboardCard>
      </s.DashboardList>
      <s.InfoWrapper>
        <s.SvgInfo>
          <use href={`${icons}#exclamation`}></use>
        </s.SvgInfo>
        <s.CommonInformation>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </s.CommonInformation>
      </s.InfoWrapper>
    </s.DashboardWrapper>
  );
};
