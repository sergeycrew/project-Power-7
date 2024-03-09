import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';
import * as form from './SignUpForm.styled';
import { register } from '../../redux/auth/authOperation';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const registerSchema = Yup.object().shape({
  name: Yup.string().trim().required('Required'),
  email: Yup.string()
    .trim()
    // .email('Please enter a valid email! For example jane@mail.com')
    .matches(
      emailPattern,
      'Please enter a valid email! For example jane@mail.com'
    )
    .required('Required'),
  password: Yup.string()
    .trim()
    .min(6, 'Too Short!')
    .max(30, 'Password should not exceed 30 characters')
    .matches(/^\S*$/, 'Password should not contain spaces')
    .required('Required'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
};

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const onRegisterSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={onRegisterSubmit}
      validationSchema={registerSchema}
    >
      {/* {({ errors, touched }) => ( */}
      <form.SignUpForm autoComplete="off">
        <form.SignUpWrap>
          <form.SignUpFieldWrap>
            <form.SignUpField
              autoComplete="on"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            {/* {errors.name && touched.name ? <span>{errors.name}</span> : null} */}
            <form.SignUpError name="name" component="span" />
          </form.SignUpFieldWrap>

          <form.SignUpFieldWrap>
            <form.SignUpField
              autoComplete="on"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <form.SignUpError name="email" component="span" />
          </form.SignUpFieldWrap>

          <form.SignUpFieldWrap>
            <form.SignUpField
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <form.SignUpError name="password" component="span" />
          </form.SignUpFieldWrap>
        </form.SignUpWrap>
        <form.SignUpBtn type="submit">Sign Up</form.SignUpBtn>
      </form.SignUpForm>
      {/* )} */}
    </Formik>
  );
};
