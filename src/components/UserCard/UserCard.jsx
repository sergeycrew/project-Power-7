import * as s from './UserCard.styled'
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
// import { useState } from 'react';
import { updateUserAvatar } from '../../redux/auth/authOperation';
import { useState } from 'react';
// import React, {} from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

const UserCard = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const avatarDef = (  <s.UserSvg><use href={`${sprite}#icon-user`}></use></s.UserSvg>);
    const avatarImg = (<s.Avatar src={user.avatarUrl} alt="Avatar"/>)
    const avatarShown = user.avatarUrl ? avatarImg : avatarDef;
    // const [selectedFile, setSelectedFile] = useState(null)
    
    
    const handleFileChange = e => {
    //    dispatch(e.target.files[0]);
    dispatch(updateUserAvatar(e.target.files[0]));
}

  const [timer, setTimer] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [remainingTime, setRemainingTime] = useState(null);
    const [timerExpired, setTimerExpired] = useState(false);
  

    const verifyContent = buttonDisabled
    ? `Try again in ${remainingTime}`
    : timerExpired
    ? 'Send again'
    : 'Verify';
    const startTimer = () => {
        setButtonDisabled(true);
        setRemainingTime(60);
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
        console.log({ email });
        // dispatch(userVerifyAgain({email}));
        // console.log(state)
      };

    

    return (
        <s.Container>
        <s.AvatarContainer>
      {avatarShown}
        </s.AvatarContainer>
        <div style={{ position:'relative' }}>
<input type="file" accept=".jpg, .jpeg" id="fileInput" name="fileInput" style={{ display: 'none' }} onChange={handleFileChange}
// disabled={!user.verify}
>
</input>
<s.Label 
htmlFor="fileInput"
style={{ display: user.verify ? 'none' : 'inline-block' }}///////////////////////
// disabled={!user.verify}
>
        
        <s.UplSvg
        // disabled={!user.verify}
        >
        <use href={`${sprite}#icon-add-avatar`}></use>
        </s.UplSvg>
        </s.Label>
        </div>
        
        <s.UserName>{user.name ? user.name : 'Name'}</s.UserName>
        <s.SubTitle>User</s.SubTitle>
        <s.ButtonVerify
        type="submit"
        disabled={buttonDisabled}
        onClick={sendVerify}
        style={{ display: user.verify ? 'none' : 'inline-block' }}>{verifyContent}</s.ButtonVerify>
        </s.Container>

    )
};

export default UserCard;