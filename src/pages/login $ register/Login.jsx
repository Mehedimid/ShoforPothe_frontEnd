import React from "react";
import Lottie from "lottie-react";
import animationLogin from "../../assets/animationLogin.json";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../shared components/SectionTitle";
import Google from "../../shared components/Google";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function Login(props) {
  const {logInUser} = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInUser(data.email, data.password)
    .then(res => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successffully Log In !!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
      reset()
    })
    .catch(error => {
      toast.error(error.message)
    })
  };

  return (
    <>
      <section id="login" className="my-32">
        <div className="my-5">
          <SectionTitle>Please Login...</SectionTitle>
        </div>

        <div className="md:flex justify-center items-center">

          {/* =========== animation div ============ */}
          <div className="w-1/2 mx-auto flex items-center justify-center">
            <Lottie animationData={animationLogin} loop={true} />
          </div>
          

          {/* ========= form div starts ========== */}
          <div className="md:w-1/2 flex flex-col shadow-2xl shadow-black bg-red-100 p-5 ">
            <div>
              <Google></Google>
            </div>

            <div className="divider"></div>

            {/* ====form ===*/}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
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
                  <span className="text-red-600">
                    Password field is required
                  </span>
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

              {/* login button field  */}
              <div>
                <button
                  type="submit"
                  className="btn-grad btn-grad:hover w-full">
                  Sign In
                </button>
              </div>

              {/* go to register page   */}
              <div className="flex justify-evenly mb-5 items-center">
                <p className="inline">Dont't have registered?</p>
                <Link
                  to="/register"
                  className="border-b-2  border-black font-semibold text-xl">
                 Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </section>
    </>
  );
}

export default Login;
