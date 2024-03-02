import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state) => {
  return state;
};
const handleRejected = (state) => {
  return state;
};

const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleCurrentUserPending = (state) => {
  state.isRefreshing = true;
};

const handleCurrentUserRejected = (state) => {
  state.isRefreshing = false;
};

const handleCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.rejected, handleRejected)
      .addCase(signUp.fulfilled, handleRegisterFulfilled)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleLogInFulfilled)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)

      .addCase(refreshUser.pending, handleCurrentUserPending)
      .addCase(refreshUser.rejected, handleCurrentUserRejected)
      .addCase(refreshUser.fulfilled, handleCurrentUserFulfilled),
});

export const authReducer = authSlice.reducer;
