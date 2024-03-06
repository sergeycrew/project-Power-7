// radiobuttons
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import * as s from './UserForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import {selectIsLoggedIn, selectUser} from '../../redux/auth/authSelectors';
import { updateUserParams, userVerifyAgain } from '../../redux/auth/authOperation';

// import user from '../../jsonFromBd/userParams.json'
import { CustomDataPicker } from '../UserDataPicker/UserDataPicker';
import RadioOption from '../UserRadio/UserRadio';
import { useState } from 'react';
// import { CustomDataPicker } from '../CustomDataPicker/CustomDataPicker';




// blood - number; allowed values 1, 2, 3, 4; required
// sex - string; allowed values "male", "female"; required
// levelActivity - number; allowed values 1, 2, 3, 4, 5; required

const UserForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log(user)

    const bloodOpt = [
        { id: '1', value: '1', label: '1' },
        { id: '2', value: '2', label: '2' },
        { id: '3', value: '3', label: '3' },
        { id: '4', value: '4', label: '4' },
      ];
    
      const sexOpt = [
        { id: 'Male', value: 'male', label: 'Male' },
        { id: 'Female', value: 'female', label: 'Female' },
      ];
    
      const actOpt = [
        {
          id: 'level-1',
          value: '1',
          label: 'Sedentary lifestyle (little or no physical activity)',
        },
        {
          id: 'level-2',
          value: '2',
          label: 'Light activity (light exercises/sports 1-3 days per week)',
        },
        {
          id: 'level-3',
          value: '3',
          label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
        },
        {
          id: 'level-4',
          value: '4',
          label: 'Very active (intense exercises/sports 6-7 days per week)',
        },
        {
          id: 'level-5',
          value: '5',
          label:
            'Extremely active (very strenuous exercises/sports and physical work)',
        },
      ];
    

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    height: Yup.number()
      .positive('Height must be positive')
      .min(150, 'Should be at least 1,5m')
      .required('Height is required'),
    currentWeight: Yup.number()
      .positive('Weight must be positive')
      .min(35, 'Should be at least 35kg')
      .required('Current weight is required'),
    desiredWeight: Yup.number()
      .positive('Weight must be positive')
      .min(35, 'Should be at least 35kg')
      .required('Desired weight is required'),
    birthday: Yup.date().required('Birthday is required'),
  });
//   const userBirth = new Date(user.birthday)//////////
//   const formattedDate = parseISO(user.birthday);

  const initialValues = {
    name: user.name || 'Name',
    height: user.height || '150',
    currentWeight: user.currentWeight || '35',
    desiredWeight: user.desiredWeight || '35',
    birthday: user.birthday || '2005-01-01',
    blood: (user.blood ?? '1').toString() || '1',
    sex: user.sex || 'male',
    levelActivity: (user.levelActivity ?? '1').toString() || '1',
  };
  const handleSubmit = values => {
    // const sendData = {
    //   ...values,
    // };
    dispatch(updateUserParams(values));
    setBtnActive(false);
  };
  const [btnActive, setBtnActive] = useState(false);
  const handleChanger = (e) => {
    setBtnActive(true);
  };
   
  const sendVerify = () => {
   startTimer()
    const email = user.email;
    console.log({email})
    // dispatch(userVerifyAgain({email}));
    // console.log(state)

   
  };
 
    const [timer, setTimer] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [remainingTime, setRemainingTime] = useState(null);
    const [timerExpired, setTimerExpired] = useState(false);

  
    const startTimer = () => {
        
      setButtonDisabled(true);
      setRemainingTime(60); 
      setTimer(
        setInterval(() => {
          setRemainingTime(prevTime => {
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

    const verifyBtnContant = buttonDisabled ? `Try again in ${remainingTime}` : (timerExpired ? 'Send again' : 'Verify')



  return (
    <Formik
      initialValues={initialValues
      }
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    //   handleChange = {(e)=> handleChanger(e)}
    >{formik => (
      <s.StyledForm
      onChange={handleChanger}>
      
        
          <s.Container>
            <div style={{ width: '100%' }}>
              <s.SectionTitle>Name</s.SectionTitle>
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                as={s.Input}
                
                // defaultValue={user.name}
              />
            </div>
            <div style={{ width: '100%' }}>
            <s.SectionTitle>Email</s.SectionTitle>
              <s.Input
                type="text"
                name="email"
                defaultValue={user.email}
                style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                readOnly
                disabled
              />
      
            </div>
          </s.Container>
          <s.WrappInputFields>
            <s.WrappInput>
              <Field
                type="number"
                name="height"
                id="height"
                placeholder=""
                as={s.InputField}
              />
              <label htmlFor="height">Height</label>
            </s.WrappInput>
            <s.Wrapper>
              <s.WrappInput>
                <Field
                  type="number"
                  name="currentWeight"
                  id="currentWeight"
                  placeholder=""
                  as={s.InputField}
                />
                <label htmlFor="currentWeight">Current Weight</label>
              </s.WrappInput>
            </s.Wrapper>
          </s.WrappInputFields>
          <s.WrappInputFields>
          <s.WrappInput>
            <Field
              type="number"
              name="desiredWeight"
              id="desiredWeight"
              placeholder=""
              as={s.InputField}
            />
            <label htmlFor="desiredWeight">Desired Weight</label>
          </s.WrappInput>
          <CustomDataPicker
          selectedDate={formik.values.birthday}
        //   isOpen={true}
       
              setSelectedDate={date => {
                // const formattedDate = parseISO(date.toISOString());
                formik.setFieldValue('birthday', date.toISOString());
              }}/>
              
             
        </s.WrappInputFields>


        <s.WrapperRadio>
            <div style={{ display: 'flex', marginRight: '20px' }}>
              <div style={{ display: 'flex', marginRight: '20px' }}>
                {bloodOpt.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="blood"
                    value={option.value}
                    checked={formik.values.blood === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('blood', option.value)}
                  />
                ))}
              </div>

              <div style={{ display: 'flex' }}>
                {sexOpt.map(option => (
                  <RadioOption
                    key={option.id}
                    id={option.id}
                    name="sex"
                    value={option.value}
                    checked={formik.values.sex === option.value}
                    label={option.label}
                    onChange={() => formik.setFieldValue('sex', option.value)}
                  />
                ))}
              </div>
            </div>

            <s.WrapperLevel>
              {actOpt.map(option => (
                <RadioOption
                  key={option.id}
                  id={option.id}
                  name="levelActivity"
                  value={option.value}
                  checked={formik.values.levelActivity === option.value}
                  label={option.label}
                  onChange={() =>
                    formik.setFieldValue('levelActivity', option.value)
                  }
                />
              ))}
            </s.WrapperLevel>
          </s.WrapperRadio>
          <div style={{ display: 'flex' , justifyContent: 'flex-start'}}>
          <s.Button type="submit" disabled={!btnActive}>Save</s.Button>
          <s.ButtonVerify type="submit" 
           disabled={buttonDisabled}
           onClick={sendVerify}
           style={{ display: user.verify ? 'none' : 'inline-block' }}
           >
           {verifyBtnContant}
           </s.ButtonVerify>
          </div>
      </s.StyledForm>)}
    </Formik>
  );
};
export default UserForm;
