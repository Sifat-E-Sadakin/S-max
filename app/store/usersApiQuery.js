import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// let token = localStorage.getItem("accessToken");
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
      query: token => ({
        url: "/user/courses/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getStdCourseList: builder.query({
      query: ({ id, token }) => ({
        url: `/user/student-course/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getStdInfo: builder.query({
      query: ({ id, token }) => ({
        url: `/user/student/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllTeachers: builder.query({
      query: token => ({
        url: "/user/teachers/",
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    getAllCategory: builder.query({
      query: token => ({
        url: "/user/categories/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    setNewCategory: builder.mutation({
      query: ({ data, token }) => ({
        url: "/user/categories/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
    setNewTeacher: builder.mutation({
      query: data => ({
        url: "/user/teachers/",
        method: "POST",
        body: data,
      }),
    }),
    getTeachersCourse: builder.query({
      query: ({ id, token }) => ({
        url: `/user/teacher/${id}/courses/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getTeacherInfo: builder.query({
      query: id => ({
        url: `/user/teacher/${id}`,
        method: "GET",
      }),
    }),
    setCourse: builder.mutation({
      query: ({ data, token }) => ({
        url: "/user/courses/",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
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
  useGetAllTeachersQuery,
  useGetAllCategoryQuery,
  useSetNewCategoryMutation,
  useSetNewTeacherMutation,
  useGetTeachersCourseQuery,
  useGetTeacherInfoQuery,
  useSetCourseMutation,
} = usersApi;
