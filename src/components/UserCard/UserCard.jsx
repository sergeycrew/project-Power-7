import * as s from './UserCard.styled'
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
// import { useState } from 'react';
import { updateUserAvatar } from '../../redux/auth/authOperation';
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
    

    return (
        <s.Container>
        <s.AvatarContainer>
      {avatarShown}
        </s.AvatarContainer>
<input type="file" accept=".jpg, .jpeg" id="fileInput" name="fileInput" style={{ display: 'none' }} onChange={handleFileChange}></input>
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