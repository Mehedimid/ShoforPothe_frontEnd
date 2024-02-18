import React from "react";
import useGuide from "../hooks/useGuide";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../shared components/SectionTitle";
import Loading from "../shared components/Loading";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useIsGuide from "../hooks/useIsGuide";

function GuideDetails(props) {
  const { user } = useAuth();
  const [guides, isPending, refetch] = useGuide();
  const { email } = useParams();
  const axiosPublic = useAxiosPublic();
  const isGuide = useIsGuide()

  const guide = guides?.find((item) => item.email == email);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { user, rating, comment } = data;
    const reviewData = { user, rating, comment };

    axiosPublic
      .patch(`/guides/reviews/${guide._id}`, reviewData)
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          Swal.fire("Your Review has been added!");
          refetch();
        }
      });

    reset();
  };

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <>
      <section>
        <div className="pt-24 ">
          <SectionTitle>profile of {guide?.name}</SectionTitle>
        </div>

        {/*============ details for the guide ======== */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-7">
          {/* img div  */}
          <div>
            <img
              src={guide?.image}
              className="w-full h-[150px] md:h-[350px] object-cover"
            />
          </div>

          {/* content div  */}
          <div className="flex flex-col justify-center">
            <p className="text-start my-text-color my-5 text2xl">
              {guide?.name} <br /> <small>{guide?.education} </small>
            </p>
            <p className="text-lg my-text-color">skills: {guide?.skills}</p>
            <p className="text-lg my-text-color my-2">
              Languages: {guide?.language}{" "}
            </p>
            <p className="text-lg my-text-color">
              {guide?.experience} of experience
            </p>
          </div>
        </div>

        {/* ==============div for showing reviews ========== */}

        <div className=" bg2 shadow-xl py-10 mb-20 min-h-[100px] px-2 md:px-10">
          <div>
            <SectionTitle>Tourist Reviews </SectionTitle>
          </div>

          <div className="md:grid grid-cols-2 gap-10 my-5">
            {guide?.reviews?.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-2 shadow-xl text-xl font-medium">
                <p className="my-text-color">Tourist: {review?.user}</p>
                <p className="my-3 text-blue-700">Rating: {review?.rating}*</p>
                <p className="text-base">{review?.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========form div for review===========  */}
        <div className="min-h-[200px] p-3 md:p-10 bg2 border md:w-2/3 mx-auto shadow-xl shadow-black mb-28">
          <h1 className="text2xl font-semibold text-center tracking-wider">
            Give a Review
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* name field  */}
            <div className="w-full">
              <h2 className="text-lg  text-slate-700">Name:</h2>
              <input
                type="text"
                // {...register("user", { required: true })}
                readOnly
                defaultValue={user? user.displayName : 'Anonymous'}
                placeholder="type your name "
                className="border p-2  w-full border-red-500 rounded"
              />
              {/* {errors.name && (
                <span className="text-red-600">name is required</span>
              )} */}
            </div>

            {/* rating field  */}
            <div className="w-full">
              <h2 className="text-lg  text-slate-700">rating:</h2>
              <input
                type="number"
                {...register("rating", { required: true, min: 1, max: 5 })}
                placeholder="type your rating (1-5)"
                className="border p-2 w-full border-red-500 rounded"
              />

              {errors.rating && (
                <span className="text-red-600">
                  Please enter a rating between 1 and 5
                </span>
              )}
            </div>

            {/* review field  */}
            <div className="w-full ">
              <h1>Review:</h1>
              <textarea
                {...register("comment", { required: true })}
                placeholder="type your comment "
                className="border p-2  w-full border-red-500 rounded"
                rows="3"></textarea>
              {errors.comment && (
                <span className="text-red-600">review is required</span>
              )}
            </div>

            {user ? (
              <button type="submit" className="btn-grad mt-2 w-full text-sm">
                add review
              </button>
            ) : (
              <Link onClick={()=>Swal.fire("You Have to Login as a Tourist!")} to="/login" className="btn-grad mt-2 w-full text-sm">
                add review
              </Link>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default GuideDetails;
