import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentUser,
  updateUserParams,
  updateUserAvatar,
  userVerifyAgain,
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
  avatarUrl: '',
};

const initialState = {
  user: initialUser,
  token: null,
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
  state.user = payload;
  // state.token = payload.token;
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
  state.user = payload;
  state.isLoggedIn = true;
  state.goToParams = false;
  // state.token = payload.token;
  state.error = null;
};





const handleUpdateUserAvatarPending = (state) => {
  state.error = null;
};
const handleUpdateUserAvatarRejected = (state, { payload }) => {
  state.isLoggedIn = true;
  state.goToParams = false;
  state.error = payload;
};
const handleUpdateUserAvatarFulfilled = (state, { payload }) => {
  state.user.avatarUrl = payload;
  state.isLoggedIn = true;
  state.goToParams = false;
  // state.token = payload.token;
  state.error = null;
};

const handleUserVerifyAgainPending = (state) => {
  state.error = null;
};
const handleUserVerifyAgainRejected = (state, { payload }) => {
  state.isLoggedIn = true;
  state.goToParams = false;
  state.error = payload;
};
const handleUserVerifyAgainFulfilled = (state, { payload }) => {
  state.user = payload.user.email;
  // state.user = payload.user;
  state.isLoggedIn = true;
  state.goToParams = false;
  // state.token = payload.token;
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
      .addCase(updateUserParams.fulfilled, handleUpdateUserParamsFulfilled)

      .addCase(updateUserAvatar.pending, handleUpdateUserAvatarPending)
      .addCase(updateUserAvatar.rejected, handleUpdateUserAvatarRejected)
      .addCase(updateUserAvatar.fulfilled, handleUpdateUserAvatarFulfilled)

      .addCase(userVerifyAgain.pending, handleUserVerifyAgainPending)
      .addCase(userVerifyAgain.rejected, handleUserVerifyAgainRejected)
      .addCase(userVerifyAgain.fulfilled, handleUserVerifyAgainFulfilled)
});

export const authReducer = authSlice.reducer;
