import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_BASE_URL;

console.log(URL);

export const apiSlice = createApi({
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPaintings: builder.query({
      query: () => "/paintings",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPaintingsQuery } = apiSlice;
