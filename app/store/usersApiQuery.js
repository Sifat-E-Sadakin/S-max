import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let token = localStorage.getItem("accessToken");
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
    getCourseList: builder.query({
      query: () => ({
        url: "/user/courses/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useSetStudentMutation, useGetCourseListQuery } = usersApi;
