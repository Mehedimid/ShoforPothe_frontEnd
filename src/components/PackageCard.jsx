import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock, FaHeart, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import Title from "../shared components/Title";

function PackageCard({ item }) {
  const { user } = useAuth();
  const { image, type, tripTitle, price, _id, place, tourPlan } = item;
  // const [wishColor, setWishColor] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleWishlist = () => {
    const info = {
      email: user?.email,
      packageInfo: {
        image,
        type,
        tripTitle,
        price,
        packageId: _id,
        place,
        tourPlan,
      },
    };
    axiosPublic.post("/wishlist", info).then((res) => {
      // console.log(res.data.message)
      if (res.data?.insertedId) {
        Swal.fire({
          title: "thank you!",
          text: "Package Added To Your Wishlist",
          imageUrl: image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }else{
        toast.error(res.data.message)
      }
    });
  };

  return (
    <>

      <div className=" shadow-xl shadow-red-300">
        <div className="rounded-md   bg-red-50 ">
          {/* ------- image div of card --------- */}
          <div className="relative">
            <img
              src={image}
              className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
            />

            <div className=" font-semibold bg-red-600 w-fit p-1 text-white absolute top-0">
              {price}$/person
            </div>

            <button
              onClick={handleWishlist}
              className={` text-red-600 text-3xl font-semibold w-fit p-1  absolute right-0 top-0`}>
              <FaHeart></FaHeart>
            </button>
          </div>

          {/* --------------- info div of card -------------- */}
          <div className="flex flex-col  justify-between p-6 text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl uppercase text-gray-700  font-semibold">
                {tripTitle}
              </h2>

              <p className="font-medium">Tour Type : <span className="font-bold uppercase text-sm">{type}</span> </p>

              <Link
                to={`/packages/${_id}`}
                className="btn-grad btn-grad:hover w-full text-sm font-bold">
                view package
              </Link>
            </div>

            <div className="flex justify-between text-red-600 font-medium">
              <div>
                <FaLocationDot className="inline text-slate-600"></FaLocationDot>{" "}
                {place}{" "}
              </div>
              <div>
                <FaClock className="inline text-slate-600"></FaClock>{" "}
                {tourPlan.length}days{" "}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>

      </div>
    </>
  );
}

export default PackageCard;
