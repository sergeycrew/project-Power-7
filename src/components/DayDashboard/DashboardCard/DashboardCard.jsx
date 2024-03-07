import * as s from './DashboardCard.styled';

export const DashboardCard = ({ subtitle, icon, children }) => {
  return (
    <s.CardContainer>
      <s.InnerCardWrapper>
        <s.Svg>
          <use href={icon}></use>
        </s.Svg>
        <s.InnerCardText>{subtitle}</s.InnerCardText>
      </s.InnerCardWrapper>
      <s.UserIndicators>{children}</s.UserIndicators>
    </s.CardContainer>
  );
};
