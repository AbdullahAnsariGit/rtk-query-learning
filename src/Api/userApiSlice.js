import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: builder => ({
    getAllUser: builder.query({
      query: params => ({
        url: 'user/getAllUsers',
        method: 'GET',
        params: params,
      }),
    }),
  }),
});

export const {useGetAllUserQuery} = userApi;
