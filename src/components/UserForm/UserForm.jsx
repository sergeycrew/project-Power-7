// radiobuttons
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import { Formik, Field, ErrorMessage } from 'formik';
import * as s from './UserForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/authSelectors';
import { updateUserParams } from '../../redux/auth/authOperation';

// import user from '../../jsonFromBd/userParams.json'
import { CustomDataPicker } from '../UserDataPicker/UserDataPicker';
import RadioOption from '../UserRadio/UserRadio';
// import { CustomDataPicker } from '../CustomDataPicker/CustomDataPicker';




// blood - number; allowed values 1, 2, 3, 4; required
// sex - string; allowed values "male", "female"; required
// levelActivity - number; allowed values 1, 2, 3, 4, 5; required

const UserForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

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
    name: user.name ,
    height: user.height ,
    currentWeight: user.currentWeight ,
    desiredWeight: user.desiredWeight ,
    birthday: user.birthday ,
    blood: (user.blood ?? '1').toString() ,
    sex: user.sex ?? 'male' ,
    levelActivity: (user.levelActivity ?? '1').toString() ,
  };
  const handleSubmit = values => {
    const sendData = {
      ...values,
    };
    dispatch(updateUserParams(sendData));
  };

  return (
    <Formik
      initialValues={initialValues
      }
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >{formik => (
      <s.StyledForm>
      
        
          <s.Container>
            <div>
              <s.SectionTitle>Basic info</s.SectionTitle>
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                as={s.Input}
              />
            </div>
            <div>
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
          <s.Button type="submit">Save</s.Button>
      </s.StyledForm>)}
    </Formik>
  );
};
export default UserForm;
