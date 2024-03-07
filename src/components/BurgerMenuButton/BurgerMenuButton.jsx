import sprite from 'images/sprite/sprite.svg';
import { ButtonMenu, IconBurgerMenu } from './BurgerMenuButton.styled';

export const BurgerMenuButton  = ({ openModal }) => {
  return (
    <ButtonMenu onClick={openModal}>
      <IconBurgerMenu >
        <use href={`${sprite}#burger-menu`}></use>
      </IconBurgerMenu>
    </ButtonMenu>
  );
};

