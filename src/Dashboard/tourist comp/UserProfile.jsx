import React from "react";
import Title from "../../shared components/Title";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

function UserProfile(props) {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const story = {
      type:data.type,
      title:data.title,
      image:data.photo,
      location:data.location,
      description:data.story,
      userName:data.user,
      userEmail:user.email,
    };

    console.log(data);
    const res = await axiosPublic.post("/stories", story);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire("Your story is added !!");
    }
  };

  return (
    <>
      <div className="flex md:flex-row items-center justify-center gap-5">
        <div className="md:w-1/2 border">
          <img src={user?.photoURL} className="w-full h-[150px] md:h-[250px]" />
        </div>
        <Title
          subHeading={"profile of"}
          heading={user?.displayName}
          description={" "}></Title>
      </div>

      {/* ========================== user form for adding story====================== */}
      <div className="min-h-[200px] p-3 md:p-10 bg-orange-100 border md:w-2/3 mx-auto shadow-xl shadow-black my-28">
        <h1 className="text-2xl uppercase font-semibold text-center tracking-wider">
          add a story
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* name field  */}
          <div className="w-full">
            <h2 className="text-lg  text-slate-700">Name:</h2>
            <input
              type="text"
              {...register("user", { required: true })}
              placeholder="type your name "
              className="border p-2  w-full border-red-500 rounded"
            />
            {errors.name && (
              <span className="text-red-600">name is required</span>
            )}
          </div>

          {/* photo field  */}
          <div className="w-full">
            <h2 className="text-lg  text-slate-700">photo:</h2>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="type your photo url"
              className="border p-2 w-full border-red-500 rounded"
            />

            {errors.photo && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>

 

          {/* title field  */}
          <div className="w-full">
            <h2 className="text-lg  text-slate-700">title:</h2>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="type your title url"
              className="border p-2 w-full border-red-500 rounded"
            />

            {errors.title && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>


          {/* location field  */}
          <div className="w-full">
            <h2 className="text-lg  text-slate-700">location:</h2>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="type your location url"
              className="border p-2 w-full border-red-500 rounded"
            />

            {errors.location && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>


          {/* type field  */}
          <div className="w-full">
            <h2 className="text-lg  text-slate-700">tour type:</h2>
            <input
              type="text"
              {...register("type", { required: true })}
              placeholder="type your type url"
              className="border p-2 w-full border-red-500 rounded"
            />

            {errors.title && (
              <span className="text-red-600">this field is required</span>
            )}
          </div>


          {/* story field  */}
          <div className="w-full ">
            <h1>story:</h1>
            <textarea
              {...register("story", { required: true })}
              placeholder="type your story "
              className="border p-2  w-full border-red-500 rounded"
              rows="3"></textarea>
            {errors.comment && (
              <span className="text-red-600">story is required</span>
            )}
          </div>

          <button type="submit" className="btn-grad w-full text-sm">
            add review
          </button>
        </form>
      </div>
    </>
  );
}

export default UserProfile;
