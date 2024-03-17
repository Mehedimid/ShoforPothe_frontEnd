import React from "react";
import { Link } from "react-router-dom";
import { HiCursorClick } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

function GuideCard({ item }) {
  const {
    name,
    image,
    email,
    phone,
    education,
    language,
    reviews,
    experience,
  } = item;

  return (
    <div>
      {/* <!-- component --> */}
      {/* <!-- Create By Joker Banny --> */}
      <div className="flex justify-center items-center w-96">
        <div className="w-full  mx-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
          <img className="w-full h-56 object-cover" src={image} />
          <div className="text-center relative pt-14 pb-5">
            <Link
              to={`/guide-details/${email}`}
              className="absolute border-2 border-[#8ADAB2] transform -top-10 left-28 flex z-50 text4 bg-white rounded-full hover:text-green-400 transition-all duration-200 cursor-pointer">
              <HiCursorClick className="p-6 w-20 h-20 font-bold " />
            </Link>
            <h1 className="mb-1 text2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer capitalize">
              {name}
            </h1>
            <span className="text-lg text-gray-700 hover:text-gray-900 capitalize">
              experience: {experience}
            </span>

            <p className="font-bold mt-2 text-blue-800">
              (Reviews: {reviews?.length})
            </p>

           <div className="mt-3 text4 font-bold hover:text-green-600">
           <Link  to={`/guide-details/${email}`}>View More <FaArrowRightLong className="inline" /> </Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
