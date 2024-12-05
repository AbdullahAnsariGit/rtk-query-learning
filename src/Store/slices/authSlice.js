// src/Store/authSlice.js
import {createSlice} from '@reduxjs/toolkit';

// Define the initial state for auth (user and token)
const initialState = {
  user: null, // Replace with the actual user data type if necessary
  token: null,
};

// Create the auth slice to handle setting and clearing user data and token
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set user and token
    setAuth(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Action to clear user and token
    clearAuth(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const {setAuth, clearAuth} = authSlice.actions;

export default authSlice.reducer;
