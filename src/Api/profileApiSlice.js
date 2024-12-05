import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery,
  endpoints: builder => ({
    getProfile: builder.query({
      query: userId => `profile/${userId}`,
    }),
    updateProfile: builder.mutation({
      query: updatedProfile => ({
        url: 'profile',
        method: 'PUT',
        body: updatedProfile,
      }),
    }),
  }),
});

export const {useGetProfileQuery, useUpdateProfileMutation} = profileApi;
