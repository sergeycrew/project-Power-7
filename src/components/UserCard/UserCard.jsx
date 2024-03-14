import * as s from './UserCard.styled';
import sprite from '../../images/sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';

import {
  updateUserAvatar,
  userVerifyAgain,
} from '../../redux/auth/authOperation';
import { useState } from 'react';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatarDef = (
    <s.UserSvg>
      <use href={`${sprite}#user`}></use>
    </s.UserSvg>
  );
  const avatarImg = <s.Avatar src={user.avatarUrl} alt="Avatar" />;
  const avatarShown = user.avatarUrl ? avatarImg : avatarDef;

  const handleFileChange = (e) => {
    dispatch(updateUserAvatar(e.target.files[0]));
  };

  const [timer, setTimer] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerExpired, setTimerExpired] = useState(false);

  const verifyContent = buttonDisabled
    ? `Try again in ${remainingTime}`
    : timerExpired
    ? 'Send again'
    : 'Verify';

  const sucsescontent = 'Verified';

  const isVerifyed = user.verify ? sucsescontent : verifyContent;

  const startTimer = () => {
    clearInterval(timer);
    setButtonDisabled(true);
    setRemainingTime(20);
    setTimer(
      setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer);
            setButtonDisabled(false);
            setTimerExpired(true);
            return null;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000)
    );
  };

  const sendVerify = () => {
    startTimer();

    const email = user.email;

    dispatch(userVerifyAgain({ email }));
  };

  return (
    <s.Container>
      <s.AvatarContainer>{avatarShown}</s.AvatarContainer>
      <div style={{ position: 'relative' }}>
        <input
          type="file"
          accept=".jpg, .jpeg"
          id="fileInput"
          name="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        ></input>
        <s.Label
          htmlFor="fileInput"
          style={{ display: !user.verify ? 'none' : 'inline-block' }}
        >
          <s.UplSvg>
            <use href={`${sprite}#add`}></use>
          </s.UplSvg>
        </s.Label>
      </div>

      <s.UserName>{user.name ? user.name : 'Name'}</s.UserName>
      <s.SubTitle>User</s.SubTitle>
      <s.ButtonVerify
        type="submit"
        disabled={buttonDisabled || user.verify}
        onClick={sendVerify}
        style={{
          color: user.verify
            ? '#3cbf61'
            : buttonDisabled
            ? 'rgba(239, 237, 232, 0.9)'
            : 'tomato',
        }}
      >
        {isVerifyed}
      </s.ButtonVerify>
    </s.Container>
  );
};

export default UserCard;
