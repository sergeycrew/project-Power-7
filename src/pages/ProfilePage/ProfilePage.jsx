import DailyBaseInfo from '../../components/DayliBaseInfo/DayliBaseInfo';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import UserNote from '../../components/UserNote/UserNote';
import * as s from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <s.Container>
      <s.Title>Profile Setings</s.Title>
      <s.Wrapper>
      <div>
        <UserCard />
        <s.WrappInfo>
          <DailyBaseInfo
            iconId="icon-fork-knife"
            text="Daily calorie intake"
            value="100"
          />
          <DailyBaseInfo
            iconId="icon-dumbbell"
            text="Daily physical activity"
            value="0"
          />
        </s.WrappInfo>
        <UserNote />
        </div>
        <s.WrappForm>
        <UserForm />
        </s.WrappForm>
      </s.Wrapper>
    </s.Container>
  );
};

export default ProfilePage;
