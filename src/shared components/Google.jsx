import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Google(props) {
    const {googleLogin} = useAuth() ;
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successffully Log In !!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
          }).catch((error) => {
           console.error(error.message)
          });
    }

  return (
    <div className="flex justify-center">
      <button onClick={handleGoogleLogin}>
        <div className="bg-white hover:bg-neutral-200 flex items-center gap-2 text-2xl font-bold w-fit  px-16 py-2 border-2 border-black rounded-lg">
          <FcGoogle></FcGoogle>
          <small>Log in with Google</small>
        </div>
      </button>
    </div>
  );
}

export default Google;