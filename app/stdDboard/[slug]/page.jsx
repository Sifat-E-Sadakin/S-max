"use client";
import {
  useGetCourseListQuery,
  useGetStdCourseListQuery,
  useGetStdInfoQuery,
} from "@/app/store/usersApiQuery";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  let [showCourse, setShowCourse] = useState([]);
  let stdId = useParams();
  console.log(stdId.slug);
  let { data: stdInfo } = useGetStdInfoQuery(stdId.slug);
  let { data: allCourses } = useGetCourseListQuery();
  // let { data: myCourses } = useGetStdCourseListQuery(stdId.slug);

  useEffect(() => {
    setShowCourse(allCourses);
  });

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="overflow-x-auto">
          <h1 className="text-3xl font-bold text-center">
            Welcome {stdInfo?.student.name}
          </h1>
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Course Title</th>
                <th>Course ID</th>
                <th>Instructor ID</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {showCourse &&
                showCourse.map((course, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{course.title}</td>
                    <td>{course.id}</td>
                    <td>{course.teacher[0]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>List of courses</a>
          </li>
          <li>
            <a>My course</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
