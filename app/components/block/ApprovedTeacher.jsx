import { useGetAllTeachersQuery } from "@/app/store/usersApiQuery";
import React, { useEffect, useState } from "react";

const ApprovedTeacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const { data: allTeacher } = useGetAllTeachersQuery();

  useEffect(() => {
    if (allTeacher) {
      let approvedTeacher = allTeacher.filter(
        teacher => teacher.approved_as_teacher === true
      );
      setTeacherList(approvedTeacher);
    }
  }, [allTeacher]);
  return (
    <div>
      <h1 className="text-center my-10 text-4xl font-semibold">
        List Of Approved teacher
      </h1>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {teacherList &&
              teacherList.map((teacher, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{teacher.fullName}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone_number}</td>
                  <td>
                    {teacher.approved_as_teacher ? "Approved" : "Pending"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedTeacher;
