import { Button, Icon } from "./GoogleSignIn.styled";
import sprite from 'images/sprite/sprite.svg';
// import { useDispatch } from 'react-redux';
// import { GoogleAuth } from '../../redux/auth/authOperation';

export const GoogleSignInButton = () => {
//const dispatch = useDispatch()
    
    const onClickGoogleBtn = () => {
        window.location.assign(
            'https://backend-power-pulse-7.onrender.com/api/users/googleAuth'
        )
        //dispatch(GoogleAuth)
  };

    return (
        <Button type="button" onClick={onClickGoogleBtn}>
            Sign In with
            <Icon>
                <use href={`${sprite}#google`} />
            </Icon>
        </Button>
    )
}