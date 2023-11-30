import React from "react";
import useAuth from "../../hooks/useAuth";
import Title from "../../shared components/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

function GuideProfile(props) {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {

    const obj = {
name:data.name,
image:data.image,
email:user?.email,
phone:'',
education:data.education,
skills:'',
language:'',
experience:data.experience,
reviews:[

],
    }


    axiosPublic.post('/guides',obj) 
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire("profile updated!");
            reset()
        }
    })
  }

  return (
    <>
      <div>
        <div className="flex md:flex-row items-center justify-center gap-5">
          <div className="md:w-1/2 border">
            <img
              src={user?.photoURL}
              className="w-full h-[150px] md:h-[250px]"
            />
          </div>
          <Title
            subHeading={"profile of"}
            heading={user?.displayName}
            description={" "}></Title>
        </div>

        <div>
        <div className="min-h-[200px] p-3 md:p-10 bg-orange-100 border md:w-2/3 mx-auto shadow-xl shadow-black mb-28">
          <h1 className="text-2xl font-semibold text-center tracking-wider">
            update profile
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* name field  */}
            <div className="w-full">
              <h2 className="text-lg  text-slate-700">Name:</h2>
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

                        {/* educatin field  */}
             <div className="w-full">
              <h2 className="text-lg  text-slate-700">education:</h2>
              <input
                type="text"
                {...register("education", { required: true })}
                placeholder=" "
                className="border p-2  w-full border-red-500 rounded"
              />
              {errors.name && (
                <span className="text-red-600">this is required</span>
              )}
            </div>

                        {/*  field  */}
                        <div className="w-full">
              <h2 className="text-lg  text-slate-700">experience:</h2>
              <input
                type="text"
                {...register("experience", { required: true })}
                placeholder=" "
                className="border p-2  w-full border-red-500 rounded"
              />
              {errors.name && (
                <span className="text-red-600">this is required</span>
              )}
            </div>

            {/* phot  */}
            <div className="w-full">
              <h2 className="text-lg  text-slate-700">img url:</h2>
              <input
                type="text"
                {...register("image", { required: true })}
                placeholder=" "
                className="border p-2  w-full border-red-500 rounded"
              />
              {errors.name && (
                <span className="text-red-600">this is required</span>
              )}
            </div>





            <button type="submit" className="btn-grad w-full text-sm">
              add review
            </button>
          </form>
        </div>
        </div>

      </div>
    </>
  );
}

export default GuideProfile;



//     "name": "Tanvir Islam",
//     "image": "https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg?size=626&ext=jpg&uid=R109449898&semt=ais",
//     "email": "tanvir@example.com",
//     "phone": "01623232211",
//     "education": "Hons in Tourism, DU",
//     "skills": "Tour guiding, Customer service",
//     "language": "Bangla, English, Hindi, Urdu",
//     "experience": "5 years",
//     "reviews": [

//     ]
//     },