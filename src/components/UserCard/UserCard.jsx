import * as s from './UserCard.styled'
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
// import React, {} from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

const UserCard = () => {
    const user = useSelector(selectUser);
    const avatarDef = (  <s.UserSvg><use href={`${sprite}#icon-user`}></use></s.UserSvg>);
    const avatarImg = (<s.Avatar src={user.avatar} width="100%" alt="Avatar"/>)
    const avatarShown = user.avatar ? avatarImg : avatarDef;

    return (
        <s.Container>
        <s.AvatarContainer>
      {avatarShown}
        </s.AvatarContainer>
<input type="file" accept=".jpg, .jpeg" id="fileInput" name="fileInput" style={{ display: 'none' }}></input>
<s.Label htmlFor="fileInput" >
        
        <s.UplSvg>
        <use href={`${sprite}#icon-add-avatar`}></use>
        </s.UplSvg>
        </s.Label>
        
        
        <s.UserName>{user.name}</s.UserName>
        <s.SubTitle>User</s.SubTitle>
        </s.Container>

    )
};

export default UserCard;