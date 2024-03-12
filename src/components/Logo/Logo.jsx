
import sprite from 'images/sprite/sprite.svg';
import { LogoIcon, LogoText, LogoWrapper } from './Logo.styled';
import { useLocation } from 'react-router-dom';
import { selectUserDataComplete } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const Logo = () => {
  const location = useLocation();
  const isErrorPage = location.pathname === '/404';
  const userParams = useSelector(selectUserDataComplete);
  const redirectLink = userParams ? '/diary' : '/profile';

  return (
    <LogoWrapper  aria-label="Logotype Power-Pulse" to={redirectLink}>
      <LogoIcon
        style={{fill: isErrorPage ? '#efede8' : '#E6533C'}}
      >
        <use href={`${sprite}#logo-icon-c`} />
      </LogoIcon>
      <LogoText>
        <use href={`${sprite}#logo-text`} />
      </LogoText>
    </LogoWrapper>
  );
};


// Logo.propTypes = {
//   iconColor: PropTypes.string,
// };
