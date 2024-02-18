"use client";
import { useSetCourseMutation } from "@/app/store/usersApiQuery";
import React from "react";
import { useForm } from "react-hook-form";

const CreateCourse = ({ info }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let token = localStorage.getItem("accessToken");
  let teacherId = info.teacher.id;
  const [setNewCourse, { data: newCourse, isError, isSuccess }] =
    useSetCourseMutation(token);
  const onSubmit = data => {
    let configData = { ...data, teacher: [teacherId] };
    console.log(configData);
    setNewCourse({ configData, token });
    console.log(data);
  };
  if (isSuccess) {
    console.log("success");
    alert("Course created successfully");
    console.log(newCourse);
  }
  if (isError) {
    console.log("error");
    alert("Course creation failed");
    console.log(newCourse);
  }

  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Web Development 101"
              className="input input-bordered"
              required
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="number"
              placeholder="1"
              className="input input-bordered "
              required
              {...register("category", { required: true })}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
