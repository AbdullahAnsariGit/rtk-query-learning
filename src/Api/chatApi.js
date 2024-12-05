import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from './apiConfig';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  endpoints: builder => ({
    fetchChatsList: builder.query({
      query: () => ({
        url: 'chat/fetchMyChats',
        method: 'GET',
      }),
      keepUnusedDataFor: 0,
    }),
    fetchMessages: builder.query({
      query: id => ({
        url: `message/getChatMessages/${id}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 0,
    }),
    sendMessage: builder.mutation({
      query: body => ({
        url: `message/createMessage`,
        method: 'POST',
        body,
      }),
    }),
    createChat: builder.mutation({
      query: body => ({
        url: `chat/createChat`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useFetchChatsListQuery,
  useFetchMessagesQuery,
  useSendMessageMutation,
  useCreateChatMutation,
} = chatApi;
