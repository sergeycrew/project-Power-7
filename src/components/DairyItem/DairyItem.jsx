import * as s from './DairyItem.styled';
import icons from '../../images/sprite.svg';

export const DairyItem = ({ title, link, to, children }) => {
  return (
    <s.ItemWrapper>
      <s.TitleWrapper>
        <s.DairyItemTitle>{title}</s.DairyItemTitle>
        <s.LinkToOtherPage to={to}>
          <s.LinkText>{link}</s.LinkText>
          <s.ArrowIcon>
            <use href={`${icons}#icon-arrow-right`}></use>
          </s.ArrowIcon>
        </s.LinkToOtherPage>
      </s.TitleWrapper>
      {children}
    </s.ItemWrapper>
  );
};
