import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65ae38e71dfbae409a744853.mockapi.io/",
  }),
  endpoints: () => ({}),
});
