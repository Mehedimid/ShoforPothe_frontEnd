import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Register(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="register">
      
      <div className="my-20 lg:flex items-center justify-center ga">
        {/*==== section image === */}
        <div className="hidden lg:block">
          <img
            src="https://img.freepik.com/free-vector/colored-summer-holidays-realistic-composition_1284-24451.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=ais"
            className="w-9/12 mx-auto"
          />
        </div>

        {/* =======section form ===== */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex lg:w-1/2 flex-col border  p-5 space-y-3 ">
          {/* photo field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">Photo URL:</h2>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="type photo url... "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.photo && (
              <span className="text-red-600">photo is required</span>
            )}
          </div>

          {/* name field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">Name:</h2>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="type your name "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.name && (
              <span className="text-red-600">name is required</span>
            )}
          </div>

          {/* email field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">email:</h2>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="type email "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>

          {/* password field  */}
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">password:</h2>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              })}
              placeholder="type password "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.password?.type == "required" && (
              <span className="text-red-600">Password field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                Password must be at least 6 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                Password must contain at least one lowercase letter, one
                uppercase letter, one digit, and one special character.
              </span>
            )}
          </div>

          {/* register button field  */}
          <div>
            <button type="submit" className="my-btn w-full">
              Register
            </button>
          </div>

          {/* go to login field  */}
          <div className="flex justify-evenly mb-5 items-center">
            <p className="inline">Already Registered?</p>
            <Link
              to="/login"
              className="border-b-2  border-black font-semibold text-xl">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
