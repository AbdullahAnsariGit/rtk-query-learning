import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';
import Toast from 'react-native-toast-message';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery,
  endpoints: builder => ({
    contact: builder.mutation({
      query: data => ({
        url: 'contact/addContact',
        method: 'POST',
        body: data,
        onQueryStarted: async (arg, {dispatch, queryFulfilled}) => {
          try {
            // Wait for the query to fulfill
            const result = await queryFulfilled;
            // Global success toast for successful queries
            Toast.show('Request successful!');
          } catch (error) {
            // Handle error globally
            Toast.show('Failed to fetch data');
          }
        },
      }),
    }),
  }),
});

export const {useContactMutation} = contactApi;
