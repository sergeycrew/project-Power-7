import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentUser,
  updateUserParams,
} from './authOperation';

const initialUser = {
  name: '',
  email: '',
  height:'',
  currentWeight: '',
  desiredWeight: '',
  birthday: '01.01.1900',
  blood: 1,
  sex: 'male',
  levelActivity: 1,
};

const initialState = {
  user: initialUser,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU1MDk4OWQxNTIyZWExMmEyYjE4YTMiLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA5NjQwMzc5LCJleHAiOjE3MDk3MjMxNzl9.ngrNvjhTdTTrlEi6bZatbsZ0tyHYtqQjs30q9TxayAg",
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = (state) => {
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogOutFulfilled = (state) => {
  state.user = initialUser;
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
};

const handleCurrentUserPending = (state) => {
  state.isRefreshing = true;
  state.error = null;
};

const handleCurrentUserRejected = (state, { payload }) => {
  state.user = initialUser;
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = payload;
};

const handleCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

const handleUpdateUserParamsPending = (state) => {
  state.error = null;
};
const handleUpdateUserParamsRejected = (state, { payload }) => {
  state.isLoggedIn = true;
  state.goToParams = false;
  state.error = payload;
};
const handleUpdateUserParamsFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.goToParams = false;
  state.token = payload.token;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, handleRegisterFulfilled)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleLogInFulfilled)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)

      .addCase(currentUser.pending, handleCurrentUserPending)
      .addCase(currentUser.rejected, handleCurrentUserRejected)
      .addCase(currentUser.fulfilled, handleCurrentUserFulfilled)

      .addCase(updateUserParams.pending, handleUpdateUserParamsPending)
      .addCase(updateUserParams.rejected, handleUpdateUserParamsRejected)
      .addCase(updateUserParams.fulfilled, handleUpdateUserParamsFulfilled),
});

export const authReducer = authSlice.reducer;
