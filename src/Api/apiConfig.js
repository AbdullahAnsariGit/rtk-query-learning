import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { checkNetworkConnectivity } from "../Utils/networkCheck";
import { baseUrl } from "./configs";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = getState().auth.token;
    console.log("headers", headers);

    const isConnected = await checkNetworkConnectivity();
    console.log("Network connected:", isConnected);

    if (!isConnected) {
      return Promise.reject({ error: "No internet connection" });
    }

    // headers.set('Content-Type', 'application/json');
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
