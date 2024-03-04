import * as s from './DashboardCard.styled';

export const DashboardCard = ({ subtitle, icon }) => {
  return (
    <s.CardContainer>
      <s.InnerCardWrapper>
        <s.Svg>
          <use href={icon}></use>
        </s.Svg>
        <s.InnerCardText>{subtitle}</s.InnerCardText>
      </s.InnerCardWrapper>
      <s.UserIndicators>2000</s.UserIndicators>
    </s.CardContainer>
  );
};
