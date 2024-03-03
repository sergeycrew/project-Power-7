import * as s from './UserCard.styled'
import sprite from '../../images/sprite.svg';
// import React, {} from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

const UserCard = () => {
    // const user = useSelector(state => state.user);

    return (
        <s.Container>
        <s.AvatarContainer>
        <s.UserSvg><use href={`${sprite}#icon-user`}></use></s.UserSvg>
        </s.AvatarContainer>
<input type="file" id="fileInput" name="fileInput" style={{ display: 'none' }}></input>
<s.Label htmlFor="fileInput" >
        
        <s.UplSvg>
        <use href={`${sprite}#icon-add-avatar`}></use>
        </s.UplSvg>
        </s.Label>
        
        
        <s.UserName>Bon</s.UserName>
        <s.SubTitle>User</s.SubTitle>
        </s.Container>

    )
};

export default UserCard;