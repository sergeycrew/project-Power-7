import icons from '../../images/sprite.svg';
import { DashboardCard } from './DashboardCard/DashboardCard';
import * as s from './DayDashboard.styled';

export const DayDashboard = () => {
  //   const arr = [
  //     { subtitle: 'Daily calorie intake', icon: `${icons}#icon-fork-knife` },
  //     { subtitle: 'Daily physical activity', icon: `${icons}#icon-dumbbell` },
  //     { subtitle: 'Сalories consumed', icon: `${icons}#icon-apple` },
  //     { subtitle: 'Сalories burned', icon: `${icons}#icon-fire` },
  //     { subtitle: 'Calories remaining', icon: `${icons}#icon-bubble` },
  //     { subtitle: 'Sports remaining', icon: `${icons}#icon-human` },
  //   ];
  return (
    <s.DashboardWrapper>
      <s.DashboardList>
        {/* {arr.map((item, index) => (
          <DashboardCard
            key={index}
            subtitle={item.subtitle}
            icon={item.icon}
          />
        ))} */}
        <DashboardCard
          subtitle="Daily calorie intake"
          icon={`${icons}#icon-fork-knife`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Daily physical activity"
          icon={`${icons}#icon-dumbbell`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Сalories consumed"
          icon={`${icons}#icon-apple`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Сalories burned"
          icon={`${icons}#icon-fire`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Calories remaining"
          icon={`${icons}#icon-bubble`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Sports remaining"
          icon={`${icons}#icon-running-figure`}
        ></DashboardCard>
      </s.DashboardList>
      <s.InfoWrapper>
        <s.SvgInfo>
          <use href={`${icons}#icon-attention`}></use>
        </s.SvgInfo>
        <s.CommonInformation>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </s.CommonInformation>
      </s.InfoWrapper>
    </s.DashboardWrapper>
  );
};
