import PropTypes from 'prop-types';
import sprite from 'images/sprite/sprite.svg';
import { LogoIcon, LogoText, LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper to={'/'}>
      <LogoIcon  >
        <use href={`${sprite}#logo-icon`} />
      </LogoIcon>
      <LogoText>
        <use href={`${sprite}#logo-text`} />
      </LogoText>
    </LogoWrapper>
  );
};


Logo.propTypes = {
  iconColor: PropTypes.string,
};
