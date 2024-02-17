import { useSetNewCategoryMutation } from "@/app/store/usersApiQuery";
import React from "react";
import { useForm } from "react-hook-form";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let token = localStorage.getItem("accessToken");
  const [setNewCategory, { data: newCategory, isError, isSuccess }] =
    useSetNewCategoryMutation(token);
  const onSubmit = data => {
    setNewCategory({ data, token });
  };
  if (isSuccess) {
    console.log("success");
    alert("Category created successfully");
  }
  if (isError) {
    console.log("error");
    alert("Category creation failed");
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
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Learn web development from scratch "
              className="input input-bordered h-36"
              required
              {...register("description", { required: true })}
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

export default CreateCategory;
