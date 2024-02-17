"use client";
import AllCategory from "@/app/components/block/AllCategory";
import AllTeacher from "@/app/components/block/AllTeacher";
import ApprovedTeacher from "@/app/components/block/ApprovedTeacher";
import CreateCategory from "@/app/components/block/CreateCategory";
import React, { useState } from "react";

const page = () => {
  let [showContent, setShowContent] = useState();

  let renderContent = content => {
    setShowContent(content);
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {showContent === "allRequest" && <AllTeacher />}
        {showContent === "approvedTeacher" && <ApprovedTeacher />}
        {showContent === "allCategory" && <AllCategory />}
        {showContent === "createCategory" && <CreateCategory />}
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
            <a onClick={() => renderContent("allRequest")}>View all request</a>
          </li>
          <li>
            <a onClick={() => renderContent("approvedTeacher")}>
              Approved teacher
            </a>
          </li>
          <li>
            <a onClick={() => renderContent("allCategory")}>
              View all category
            </a>
          </li>
          <li>
            <a onClick={() => renderContent("createCategory")}>
              {" "}
              Create new category
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
