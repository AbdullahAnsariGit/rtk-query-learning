import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./apiConfig";
export const rafflesApi = createApi({
  reducerPath: "rafflesApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllRaffles: builder.query({
      query: (params) => {
        console.log("params", params);
        return {
          url: "tasks/fetch-tasks",
          method: "GET",
          params,
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache = { data: [] }, newItems, { arg }) => {
        console.log("arg", arg);
        console.log("newItems", newItems);
        const { page } = arg;
        if (page === 1) {
          return newItems;
        }

        return {
          status: newItems.status,
          data: [...currentCache.data, ...newItems.data], // Merge data arrays
          hasNextPage: newItems.hasNextPage,
          message: newItems.message,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        console.log("currentArg", currentArg);
        console.log("previousArg", previousArg);

        if (!previousArg) return false; // Skip refetch for the initial fetch because initial fetch previous args undefined
        return (
          currentArg !== previousArg
          // currentArg.page !== previousArg.page || // Check if page changed then refetch
          // currentArg.search !== previousArg.search
        ); // Check if filters changed
      },
    }),
  }),
});

export const { useGetAllRafflesQuery } = rafflesApi;
