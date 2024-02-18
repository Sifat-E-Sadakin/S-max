"use client";
import CreateCourse from "@/app/components/block/CreateCourse";
import TeacherCourse from "@/app/components/block/TeacherCourse";
import { useGetTeacherInfoQuery } from "@/app/store/usersApiQuery";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  let [showContent, setShowContent] = useState();

  let id = useParams();
  console.log(id);
  const { data: teacherInfo } = useGetTeacherInfoQuery(id.slug);
  let renderContent = content => {
    setShowContent(content);
  };
  console.log(teacherInfo);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {showContent === "myCourses" && <TeacherCourse info={teacherInfo} />}
        {showContent === "createCourses" && <CreateCourse info={teacherInfo} />}
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
            <a onClick={() => renderContent("myCourses")}>My Courses</a>
          </li>
          <li>
            <a onClick={() => renderContent("createCourses")}>Create Course</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
