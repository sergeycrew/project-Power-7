import { useDispatch, useSelector } from 'react-redux';
import DailyBaseInfo from '../../components/DayliBaseInfo/DayliBaseInfo';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import UserNote from '../../components/UserNote/UserNote';
import * as s from './ProfilePage.styled';
import { useEffect } from 'react';
import { currentUser } from '../../redux/auth/authOperation';
import { useAuth } from '../../hooks/useAuth';
import { selectUser } from '../../redux/auth/authSelectors';

import { Container } from 'styles/container';

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
      <s.Container>
        <s.Title>Profile Setings</s.Title>
        <s.Wrapper>
          <div>
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
          </div>
          <s.WrappForm>
            <UserForm />
          </s.WrappForm>
        </s.Wrapper>
      </s.Container>
    </Container>
  );
};

export default ProfilePage;
