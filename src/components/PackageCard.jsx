import React from "react";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PackageCard({ item }) {
  const { image, type, tripTitle, price, _id, place, tourPlan } = item;

  return (
    <>
      <div>
        <div className="rounded-md shadow-lg  bg-red-50 ">
          {/* ------- image of card --------- */}
          <div className="relative">
            <img
              src={image}
              className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
            />

            <div className=" font-semibold bg-red-600 w-fit p-1 text-white absolute top-0">
              {price}$/person
            </div>
          </div>

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
