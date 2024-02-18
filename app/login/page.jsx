"use client";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../store/usersApiQuery";
import { useRouter } from "next/navigation";

const page = () => {
  const [loginPost, { data: user, isSuccess, isError }] = useLoginMutation();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    loginPost(data);
  };
  if (isSuccess) {
    console.log("success");
    console.log(user);
    localStorage.setItem("accessToken", user.token.access);
    localStorage.setItem("refreshToken", user.token.refresh);
    if (user.user.role === "admin") {
      router.push(`/adminDboard/${user.user.id}`);
    }
    if (user.user.role === "teacher") {
      router.push(`/teacherDboard/${user.user.id}`);
    }
    if (user.user.role === "student") {
      router.push(`/stdDboard/${user.user.id}`);
    }
  }
  if (isError) {
    console.log("error");
    console.log(user);
    alert("Invalid Credentials");
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            {/* <button className="btn" onClick={() => testSubmit()}>
          test
        </button> */}
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

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
