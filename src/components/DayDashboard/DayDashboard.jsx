import icons from '../../images/sprite/sprite.svg';
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
          icon={`${icons}#food`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Daily physical activity"
          icon={`${icons}#dumbbell`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Сalories consumed"
          icon={`${icons}#apple`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Сalories burned"
          icon={`${icons}#fire`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Calories remaining"
          icon={`${icons}#bubble`}
        ></DashboardCard>
        <DashboardCard
          subtitle="Sports remaining"
          icon={`${icons}#figure`}
        ></DashboardCard>
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
