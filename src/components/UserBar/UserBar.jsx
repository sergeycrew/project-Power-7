import { useSelector } from 'react-redux';
import {
  IconSettings,
  IconUserAvatar,
  UserAvatar,
  UserBarSection,
  UserLink,
} from './UserBar.styled';

import sprite from 'images/sprite/sprite.svg';
import { selectUser } from '../../redux/auth/authSelectors';

export const UserBar = () => {
  const user = useSelector(selectUser);

  return (
    <UserBarSection >
      <UserLink to="/profile">
        <IconSettings>
          <use href={`${sprite}#settings`} />
        </IconSettings>
        
      </UserLink>
      <UserAvatar>
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt="avatar" />
        ) : (
          <IconUserAvatar>
            <use href={`${sprite}#user`} />
          </IconUserAvatar>
        )}
      </UserAvatar>
    </UserBarSection>
  );
};


