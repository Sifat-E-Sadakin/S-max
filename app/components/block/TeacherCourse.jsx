"use client";
import { useGetTeachersCourseQuery } from "@/app/store/usersApiQuery";
import React, { useEffect, useState } from "react";

const TeacherCourse = ({ info }) => {
  const [courseList, setCourseList] = useState([]);

  let token = localStorage.getItem("accessToken");
  let id = info.teacher.id;
  const { data: teacherCourseList, isSuccess } = useGetTeachersCourseQuery({
    id,
    token,
  });

  useEffect(() => {
    if (isSuccess) {
      setCourseList(teacherCourseList.courses);
    }
  });

  return (
    <div>
      <h1 className="text-center my-10 text-4xl font-semibold">
        List of the courses offered by the {info?.teacher.fullName}
      </h1>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courseList &&
              courseList.map((teacher, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{teacher.title}</td>
                  <td>{teacher.category}</td>
                  <td>{info?.teacher.fullName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherCourse;
