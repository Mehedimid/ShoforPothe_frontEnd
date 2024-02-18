import React from "react";
import useAuth from "../../hooks/useAuth";
import Title from "../../shared components/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

function GuideProfile(props) {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const obj = {
      name: data.name.toUpperCase(),
      image: data.image,
      email: user?.email,
      phone: data.phone,
      education: data.education,
      skills: data.skills,
      language: data.language,
      experience: data.experience,
      reviews: [],
    };

    axiosPublic.post(`/guides`, obj).then((res) => {
      // console.log(res.data)

      if(res.data.message1){
        toast.error(res.data.message1);
      }
      if(res.data.message2){
        toast.error(res.data.message2);
      }
      if (res.data.insertedId) {
        Swal.fire("profile updated!");
        reset();
      }
    });
  };

  return (
    <>
      <div>
        <div className="flex md:flex-row items-center justify-center gap-5">
          <div className="md:w-1/2 border">
            <img
              src={user?.photoURL}
              className="w-full h-[150px] md:h-[250px] object-cover"
            />
          </div>
          <Title
            subHeading={"profile of"}
            heading={user?.displayName}
            description={" "}></Title>
        </div>

        <div>
          <div className="min-h-[200px] my-20 p-3 md:p-10 bg2 border md:w-2/3 mx-auto shadow-xl shadow-black mb-28">
            <h1 className="text2xl font-semibold text-center tracking-wider">
              Create Profile
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

              {/* phone no field  */}
              <div className="w-full">
                <h2 className="text-lg  text-slate-700">Phone No:</h2>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="01*********"
                  className="border p-2  w-full border-red-500 rounded"
                />
                {errors.name && (
                  <span className="text-red-600">this field is required</span>
                )}
              </div>

              {/* educatin field  */}
              <div className="w-full">
                <h2 className="text-lg  text-slate-700">education:</h2>
                <input
                  type="text"
                  {...register("education", { required: true })}
                  placeholder="example in Tourism, example university"
                  className="border p-2  w-full border-red-500 rounded"
                />
                {errors.name && (
                  <span className="text-red-600">this is required</span>
                )}
              </div>

              {/* skills field  */}
              <div className="w-full">
                <h2 className="text-lg  text-slate-700">Skills:</h2>
                <input
                  type="text"
                  {...register("Skills", { required: true })}
                  placeholder="write your skills here"
                  className="border p-2  w-full border-red-500 rounded"
                />
                {errors.name && (
                  <span className="text-red-600">this is required</span>
                )}
              </div>

              {/* language field  */}
              <div className="w-full">
                <h2 className="text-lg  text-slate-700">Languages:</h2>
                <input
                  type="text"
                  {...register("language", { required: true })}
                  placeholder="Bangla , English, etc..."
                  className="border p-2  w-full border-red-500 rounded"
                />
                {errors.name && (
                  <span className="text-red-600">this is required</span>
                )}
              </div>

              {/* experience field  */}
              <div className="w-full">
                <h2 className="text-lg  text-slate-700">experience:</h2>
                <input
                  type="text"
                  {...register("experience", { required: true })}
                  placeholder="example years"
                  className="border p-2  w-full border-red-500 rounded"
                />
                {errors.name && (
                  <span className="text-red-600">this is required</span>
                )}
              </div>

              {/* photo  */}
              <div className="w-full">
                <h2 className="text-lg  text-slate-700">img url:</h2>
                <input
                  type="text"
                  {...register("image", { required: true })}
                  placeholder="URL"
                  className="border p-2  w-full border-red-500 rounded"
                />
                {errors.name && (
                  <span className="text-red-600">this is required</span>
                )}
              </div>

              <button type="submit" className="btn-grad w-full text-sm">
                Update Profile
              </button>
              <ToastContainer></ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideProfile;
