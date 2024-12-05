import {combineReducers, createAction} from '@reduxjs/toolkit';
import {authApi} from '../Api/authApiSlice';
import {postApi} from '../Api/postApiSlice';
import {profileApi} from '../Api/profileApiSlice';
import authReducer from '../Store/slices/authSlice';
import {contactApi} from '../Api/contactApiSlice';
import {rafflesApi} from '../Api/rafflesApiSlice';
import {resetApi} from '../Api/resetPassApiSlice';
import {userApi} from '../Api/userApiSlice';
import {chatApi} from '../Api/chatApi';
export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [rafflesApi.reducerPath]: rafflesApi.reducer,
  [resetApi.reducerPath]: resetApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,

  auth: authReducer,
});
