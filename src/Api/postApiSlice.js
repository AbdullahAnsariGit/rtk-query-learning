import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery,
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    createPost: builder.mutation({
      query: newPost => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const {useGetPostsQuery, useCreatePostMutation} = postApi;
