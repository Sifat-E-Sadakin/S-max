import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://softmaxshop.com",
  }),
  endpoints: builder => ({
    setStudent: builder.mutation({
      query: student => ({
        url: "/user/register/",
        method: "POST",
        body: student,
      }),
    }),
  }),
});

export const { useSetStudentMutation } = usersApi;
