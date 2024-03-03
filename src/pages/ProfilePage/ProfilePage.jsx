import DailyBaseInfo from '../../components/DayliBaseInfo/DayliBaseInfo';
import UserCard from '../../components/UserCard/UserCard';
import UserNote from '../../components/UserNote/UserNote';
import * as s from './ProfilePage.styled';
// import UserNote from '../../components/UserNote/UserNote';
// import * as Yup from 'yup';
// import { Formik, Field, ErrorMessage } from 'formik';

const ProfilePage = () => {
  return (
    <s.Container>
      <s.Title>Profile Setings</s.Title>
      <UserCard/>
      <DailyBaseInfo
    //   color="${p => p.theme.colors.whiteColor}"
      iconId="icon-fork-knife"
      text="Daily calorie intake" 
      value="100"
      />
      <DailyBaseInfo
    //   color="${p => p.theme.colors.whiteColor}"
      iconId="icon-dumbbell"
      text="Daily physical activity" 
      value="0"
      />
     <UserNote/>
      
      {/* <UserCard/>
    <DailyBaseInfo>
 <UserNote>
<LogoutBtn>
<UserForm>
*/}

    </s.Container>
  );
};

export default ProfilePage;