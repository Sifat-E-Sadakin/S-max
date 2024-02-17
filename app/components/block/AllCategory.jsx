import { useGetAllCategoryQuery } from "@/app/store/usersApiQuery";
import React, { useEffect, useState } from "react";

const AllCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  let token = localStorage.getItem("accessToken");
  const { data: allCategory } = useGetAllCategoryQuery(token);

  useEffect(() => {
    setCategoryList(allCategory);
  }, [allCategory]);
  return (
    <div>
      <h1 className="text-center my-10 text-4xl font-semibold">
        List of all category
      </h1>
      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {categoryList &&
              categoryList.map((category, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCategory;
