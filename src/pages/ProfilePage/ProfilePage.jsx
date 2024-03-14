import { useDispatch, useSelector } from 'react-redux';
import DailyBaseInfo from '../../components/DayliBaseInfo/DayliBaseInfo';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import UserNote from '../../components/UserNote/UserNote';
import * as s from './ProfilePage.styled';

import { useAuth } from '../../hooks/useAuth';
import { selectUser } from '../../redux/auth/authSelectors';

import { Container } from 'styles/container';
import { Logout } from '../../components/Logout/Logout';
import { Loader } from '../../components/Loader/Loader';


const ProfilePage = () => {
  const user = useSelector(selectUser);

  const { isLoading } = useAuth();





  return  (
    isLoading ? <Loader/> : 
    <Container>
    <s.Container>
      <s.Title>Profile Setings</s.Title>
      <s.Wrapper>
        <s.UserWrap>
          <UserCard />
          <s.WrappInfo>
            <DailyBaseInfo
              iconId="icon-fork-knife"
              text="Daily calorie intake"
              value={user.bmr}
            />
            <DailyBaseInfo
              iconId="icon-dumbbell"
              text="Daily physical activity"
              value={user.timeSport}
              amoutName="min"
            />
          </s.WrappInfo>
          <UserNote />
         <s.LogoutWrap>
         <Logout />
         </s.LogoutWrap>
        </s.UserWrap>
        <s.WrappForm>
          <UserForm />
        </s.WrappForm>
      </s.Wrapper>
    </s.Container>
    </Container>
  );
};

export default ProfilePage;
