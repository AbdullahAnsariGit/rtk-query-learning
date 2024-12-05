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
          params, // Pass page and filters
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName, // Cache endpoint
      merge: (currentCache = { data: [] }, newItems, { arg }) => {
        console.log("arg", arg);

        const { page } = arg;

        if (page === 1) {
          return newItems;
        }
        return {
          data: [...currentCache.data, ...newItems.data], // Merge data arrays
          // current_page: newItems.current_page,
          // last_page: newItems.last_page,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        console.log("currentArg", currentArg);
        console.log("previousArg", previousArg);

        if (!previousArg) return false; // Skip refetch for the initial fetch because initial fetch previous args undefined
        return (
          currentArg.page !== previousArg.page || // Check if page changed then refetch
          JSON.stringify(currentArg.search) !==
            JSON.stringify(previousArg.search)
        ); // Check if filters changed
      },
    }),
  }),
});

export const { useGetAllRafflesQuery } = rafflesApi;
