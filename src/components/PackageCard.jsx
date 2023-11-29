import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock, FaHeart, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

function PackageCard({ item }) {
  const {user} = useAuth()
  const { image, type, tripTitle, price, _id, place, tourPlan } = item;
  const [wishColor, setWishColor] = useState(
    localStorage.getItem(`wishlist_${_id}`) === 'true'
  );
  const axiosPublic = useAxiosPublic();

  const handleWishlist = () => {

    if (!wishColor) {
      axiosPublic.post("/wishlist", { packageId: _id , email:user?.email}).then((res) => {

        if (res.data?.insertedId) {
          Swal.fire({
            title: "thank you!",
            text: "Package Added To Your Wishlist",
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
          setWishColor(true);
          localStorage.setItem(`wishlist_${_id}`, 'true'); 
        
        }
      });
    } 
    
    else {
      axiosPublic.delete(`/wishlist/${item._id}`)
      .then(res=>{
        console.log(res.data) 
        if(res.data.deletedCount>0){
          localStorage.removeItem(`wishlist_${_id}`)
          setWishColor(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Package removed from wishlist",
            showConfirmButton: false,
            timer: 2000
          });
        }
      })

    }
  };

  return (
    <>
      <div>
        <div className="rounded-md shadow-lg  bg-red-50 ">
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
              className={`${
                wishColor ? "text-red-500" : "text-white"
              } text-3xl font-semibold w-fit p-1  absolute right-0 top-0`}>
              <FaHeart></FaHeart>
            </button>
          </div>

          {/* --------------- info div of card -------------- */}
          <div className="flex flex-col text-start justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl text-gray-700 text-start font-semibold">
                {tripTitle}
              </h2>

              <p className="font-medium">Tour Type : {type}</p>

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
      </div>
    </>
  );
}

export default PackageCard;
