"use client";

import { useForm } from "react-hook-form";
import {
  useGetCourseListQuery,
  useSetStudentMutation,
} from "../store/usersApiQuery";
import { permanentRedirect, redirect, useRouter } from "next/navigation";
import { Router } from "next/router";

const page = () => {
  const [setStudent, { data: student, isSuccess, isError }] =
    useSetStudentMutation();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setStudent(data);
  };
  if (isSuccess) {
    console.log("success");
    localStorage.setItem("accessToken", student.token.access);
    localStorage.setItem("refreshToken", student.token.refresh);
    router.push(`/stdDboard/${student.user.id}`);
  }
  if (isError) {
    console.log("error");
    console.log(student);
  }
  // console.log(data);
  const testSubmit = () => {
    // setStudent({
    //   mobile_number: "01644997905",
    //   name: "Sifat E Sadakin",
    //   password: "softmax",
    //   password2: "softmax",
    // });
    console.log("clicked");
    router.push("/stdDboard/1");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            <button className="btn" onClick={() => testSubmit()}>
              test
            </button>
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="number"
                placeholder="017XXXXXXXX"
                className="input input-bordered"
                required
                {...register("mobile_number", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Sifat E Sadakin"
                className="input input-bordered"
                required
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Retype Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password2", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
