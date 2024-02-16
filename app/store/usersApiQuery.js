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
    login: builder.mutation({
      query: user => ({
        url: "/user/login/",
        method: "POST",
        body: user,
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
    getStdCourseList: builder.query({
      query: id => ({
        url: `/user/student-course/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getStdInfo: builder.query({
      query: id => ({
        url: `/user/student/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useSetStudentMutation,
  useGetCourseListQuery,
  useLoginMutation,
  useGetStdCourseListQuery,
  useGetStdInfoQuery,
} = usersApi;
