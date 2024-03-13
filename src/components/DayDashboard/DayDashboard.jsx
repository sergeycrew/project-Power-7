import { useSelector } from 'react-redux';
import {
  selectBurnedCalories,
  selectConsumedCalories,
  selectDoneExercisesTime,
} from '../../redux/diary/diarySelectors';
import { selectUser } from '../../redux/auth/authSelectors';
import icons from '../../images/sprite/sprite.svg';
import { DashboardCard } from './DashboardCard/DashboardCard';
import * as s from './DayDashboard.styled';
import {
  findSuccesColor,
  findAttentionColor,
  findSportRemaining,
  findCaloriesRemaining,
} from '../../Helpers/GlobalOperations';

export const DayDashboard = () => {
  const user = useSelector(selectUser);
  let burnedCalories = useSelector(selectBurnedCalories);
  let consumedCalories = useSelector(selectConsumedCalories);
  let doneExercisesTime = useSelector(selectDoneExercisesTime);
  let timeSport = Number(user.timeSport) || 110;
  let dailyCaloriesIntake = Math.round(user.bmr) || 0;

  return (
    <s.DashboardWrapper>
      <s.DashboardList>
        <s.TabletWrapper>
          <DashboardCard
            subtitle="Daily calorie intake"
            icon={`${icons}#food`}
            $bgColor="orange"
            $cardTextColor="white"
          >
            {dailyCaloriesIntake}
          </DashboardCard>
          <DashboardCard
            subtitle="Daily physical activity"
            icon={`${icons}#dumbbell`}
            $bgColor="orange"
            $cardTextColor="white"
          >
            {`${timeSport} min`}
          </DashboardCard>
        </s.TabletWrapper>
        <s.TabletWrapper>
          <DashboardCard subtitle="Сalories consumed" icon={`${icons}#apple`}>
            {Math.abs(consumedCalories)}
          </DashboardCard>
          <DashboardCard subtitle="Сalories burned" icon={`${icons}#fire`}>
            {burnedCalories}
          </DashboardCard>
        </s.TabletWrapper>
        <s.TabletWrapper>
          <DashboardCard
            subtitle="Calories remaining"
            icon={`${icons}#bubble`}
            $borderColor={findAttentionColor(
              dailyCaloriesIntake,
              Math.abs(consumedCalories)
            )}
          >
            {findCaloriesRemaining(
              dailyCaloriesIntake,
              Math.abs(consumedCalories)
            )}
          </DashboardCard>
          <DashboardCard
            subtitle="Sports remaining"
            icon={`${icons}#figure`}
            $borderColor={findSuccesColor(timeSport, doneExercisesTime)}
          >
            {`${findSportRemaining(timeSport, doneExercisesTime)} min`}
          </DashboardCard>
        </s.TabletWrapper>
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
