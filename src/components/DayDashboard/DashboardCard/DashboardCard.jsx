import * as s from './DashboardCard.styled';

export const DashboardCard = ({
  subtitle,
  icon,
  children,
  $bgColor,
  $cardTextColor,
  $borderColor,
}) => {
  return (
    <s.CardContainer $bgColor={$bgColor} $borderColor={$borderColor}>
      <s.InnerCardWrapper>
        <s.Svg>
          <use href={icon}></use>
        </s.Svg>
        <s.InnerCardText $cardTextColor={$cardTextColor}>
          {subtitle}
        </s.InnerCardText>
      </s.InnerCardWrapper>
      <s.UserIndicators>{children}</s.UserIndicators>
    </s.CardContainer>
  );
};
