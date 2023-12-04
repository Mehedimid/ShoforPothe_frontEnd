import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

function Google(props) {
    const {googleLogin} = useAuth() ;
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic() 

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
          const userInfo = {
            name: result.user?.displayName,
            email: result.user?.email,
          };
          axiosPublic.post("/users", userInfo).then((res)=>{
            // console.log(res.data)

            Swal.fire({
              position: "top-start",
              icon: "success",
              title: "Successffully Log In !!",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          })

            
          }).catch((error) => {
          //  console.error(error.message)
          });
    }

  return (
    <div className="flex justify-center">
      <button onClick={handleGoogleLogin}>
        <div className="bg-white hover:bg-neutral-200 flex items-center gap-2 md:text-2xl font-bold w-fit p-2 md:px-16 md:py-2 border-2 border-black rounded-lg">
          <FcGoogle></FcGoogle>
          <small>Log in with Google</small>
        </div>
      </button>
    </div>
  );
}

export default Google;


