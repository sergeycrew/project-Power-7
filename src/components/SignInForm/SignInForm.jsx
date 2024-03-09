import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';
import * as form from './SignInForm.styled';
import { logIn } from '../../redux/auth/authOperation';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const loginSchema = Yup.object().shape({
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
  email: '',
  password: '',
};

export const SignInForm = () => {
  const dispatch = useDispatch();

  const onSignInSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
        email,
        password,
      })
    );

    resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={onSignInSubmit}
      validationSchema={loginSchema}
    >
      {/* {({ errors, touched }) => ( */}
      <form.SignUpForm autoComplete="off">
        <form.SignUpWrap>
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
        <form.SignUpBtn type="submit">Sign In</form.SignUpBtn>
      </form.SignUpForm>
      {/* )} */}
    </Formik>
  );
};
