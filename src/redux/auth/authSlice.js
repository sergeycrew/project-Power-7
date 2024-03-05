import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, currentUser } from './authOperation';

const initialUser = {
  name: '',
  email: '',
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
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
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
      .addCase(currentUser.fulfilled, handleCurrentUserFulfilled),
});

export const authReducer = authSlice.reducer;
