import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../shared components/SectionTitle";
import Google from "../../shared components/Google";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function Register(props) {
  const {createUser, updateUser} = useAuth() ;
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    createUser(data.email, data.password)
    .then(res => {
      updateUser(data.name, data.photo)
      .then(() => {
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "Successffully Log In !!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
         reset()
      }).catch((error) => {
        toast.error(error.message)

      });
    })
    .catch(error=> {
      toast.error(error.message)
    })
  
  };

  return (
    <section id="register" className="my-24">
      <SectionTitle>Please Register Account</SectionTitle>

      <div className="flex lg:w-1/2 mx-auto flex-col bg-red-100 shadow-2xl shadow-black  p-5  my-5">

        <div>
          <Google></Google>
        </div>

        <div className="divider"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
            <h2 className="text-lg mb-2 text-slate-700">Email:</h2>
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
            <h2 className="text-lg mb-2 text-slate-700">Password:</h2>
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
            <button type="submit" className="btn-grad  btn-grad:hover w-full">
              sign up
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
