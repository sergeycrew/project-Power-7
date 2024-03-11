import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import * as form from './SignInForm.styled';
import icon from '../../images/sprite/sprite.svg';
import { logIn } from '../../redux/auth/authOperation';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      emailPattern,
      'Please enter a valid email! For example jane@mail.com'
    )
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(6, 'Password must be at least 6 characters.')
    .max(30, 'Password should not exceed 30 characters')
    .matches(/^\S*$/, 'Password should not contain spaces')
    .required('Password is required'),
});

const defaultValues = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  const successImg = (
    <form.ValidateImg>
      <use href={`${icon}#success`}></use>
    </form.ValidateImg>
  );

  const errorImg = (
    <form.ValidateImg>
      <use href={`${icon}#not-success`}></use>
    </form.ValidateImg>
  );

  const onLoginSubmit = ({ email, password }, { resetForm }) => {
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
      onSubmit={onLoginSubmit}
      validationSchema={loginSchema}
    >
      {({ errors, touched }) => (
        <form.SignForm noValidate>
          <form.SignWrap>
            <form.SignFieldWrap>
              <form.SignField
                autoComplete="on"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className={
                  touched.email && errors.email
                    ? 'invalid'
                    : touched.email && !errors.email
                    ? 'valid'
                    : ''
                }
              />
              {touched.email && (errors.email || !errors.email) && (
                <form.ValidateBox>
                  {errors.email && (
                    <form.Message className="error">
                      {errorImg} {errors.email}
                    </form.Message>
                  )}
                  {!errors.email && (
                    <form.Message className="success">
                      {successImg} Success email
                    </form.Message>
                  )}
                </form.ValidateBox>
              )}
            </form.SignFieldWrap>

            <form.SignFieldWrap>
              <form.SignField
                type={isVisiblePassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                required
                className={
                  touched.password && errors.password
                    ? 'invalid'
                    : touched.password && !errors.password
                    ? 'valid'
                    : ''
                }
              />
              <form.PasswordBth
                type="button"
                onClick={() => {
                  setIsVisiblePassword(!isVisiblePassword);
                }}
              >
                {isVisiblePassword ? (
                  <form.PasswordIcon>
                    <use href={`${icon}#eye`}></use>
                  </form.PasswordIcon>
                ) : (
                  <form.PasswordIcon>
                    <use href={`${icon}#eye-off`}></use>
                  </form.PasswordIcon>
                )}
              </form.PasswordBth>
              {touched.password && (errors.password || !errors.password) && (
                <form.ValidateBox>
                  {errors.password && (
                    <form.Message className="error">
                      {errorImg} {errors.password}
                    </form.Message>
                  )}
                  {!errors.password && (
                    <form.Message className="success">
                      {successImg} Success password
                    </form.Message>
                  )}
                </form.ValidateBox>
              )}
            </form.SignFieldWrap>
          </form.SignWrap>
          <form.SubmitBtn type="submit">Sign In</form.SubmitBtn>
        </form.SignForm>
      )}
    </Formik>
  );
};
