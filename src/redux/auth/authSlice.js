import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentUser,
  updateUserParams,
  updateUserAvatar,
  userVerifyAgain,
  refreshUser,
  GoogleSignIn,
} from './authOperation';

const initialUser = {
  name: '',
  email: '',
  height: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: '01.01.1900',
  blood: 1,
  sex: 'male',
  levelActivity: 1,
  avatarUrl: '',
  bmr: '',
};

const initialState = {
  user: initialUser,
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: true,
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
  state.token = payload.tokens.refreshToken;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.tokens.refreshToken;
  state.isLoggedIn = true;
  state.error = null;
};

const handleLogOutFulfilled = (state) => {
  state.user = initialUser;
  state.token = '';
  state.isLoggedIn = false;
  state.error = null;
};

const handleCurrentUserPending = (state) => {
  // state.isRefreshing = true;
  state.error = null;
  state.isLoading = true;
};

const handleCurrentUserRejected = (state, { payload }) => {
  // state.user = initialUser;
  // state.token = '';
  // state.isLoggedIn = false;
  // state.isRefreshing = false;
  state.error = payload;
  state.isLoading = false;
};

const handleCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoading = false;

  // state.token = payload.tokens.refreshToken;
  // state.isLoggedIn = true;
  // state.isRefreshing = false;
  // state.error = null;
};

const handleUpdateUserParamsPending = (state) => {
  state.error = null;
};
const handleUpdateUserParamsRejected = (state, { payload }) => {
  state.isLoggedIn = true;
  // state.goToParams = false;
  state.error = payload;
};
const handleUpdateUserParamsFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  // state.goToParams = false;
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
  // state.user = payload.user.email;
  // state.user = payload.user;
  state.isLoggedIn = true;
  state.goToParams = false;
  // state.token = payload.token;
  state.error = null;
};

const handleUserRefreshPending = (state) => {
  state.error = null;
  state.isRefreshing = true;
};
const handleUserRefreshRejected = (state, { payload }) => {
  state.error = payload;
  state.isRefreshing = false;
};
const handleUserRefreshFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.token = payload;
  state.isRefreshing = false;
};

const handleLogInGoogleFulfilled = (state, { payload }) => {
  state.token = payload;
  state.isLoggedIn = true;
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

      .addCase(GoogleSignIn.pending, handlePending)
      .addCase(GoogleSignIn.rejected, handleRejected)
      .addCase(GoogleSignIn.fulfilled, handleLogInGoogleFulfilled)

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

      .addCase(refreshUser.pending, handleUserRefreshPending)
      .addCase(refreshUser.rejected, handleUserRefreshRejected)
      .addCase(refreshUser.fulfilled, handleUserRefreshFulfilled),
});

export const authReducer = authSlice.reducer;
