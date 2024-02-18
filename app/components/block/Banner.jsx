"use client";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to Softmax online school
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">
            <Link href={"/TeacherRequest"}>Join as a instructor</Link>
          </button>
          <button className="mx-5 btn btn-accent">
            <Link href={"/registration"}>Join as a Student</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
