import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';
import {setAuth} from '../Store/slices/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'user/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          console.log('data', data);
          // // Dispatch the action to store user and token in Redux
          dispatch(setAuth({user: data?.data?.user, token: data?.data?.token}));
        } catch (error) {
          console.log('Login failed', error);
        }
      },
    }),
    register: builder.mutation({
      query: userInfo => ({
        url: 'user/register',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;
