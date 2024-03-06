import * as s from './DiaryItem.styled';
import icons from '../../images/sprite.svg';

export const DiaryItem = ({ title, link, to, children }) => {
  return (
    <s.ItemWrapper>
      <s.TitleWrapper>
        <s.DiaryItemTitle>{title}</s.DiaryItemTitle>
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
