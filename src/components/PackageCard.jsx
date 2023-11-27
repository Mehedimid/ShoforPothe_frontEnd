import React from "react";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";

function PackageCard({ item }) {
  const {image, type, tripTitle, price, category, place, date, tourPlan} = item;
  

  return (
    <>
      <div>
        <div className="rounded-md shadow-md bg-white">

            {/* ------- image of card --------- */}
          <img
            src={image}
            className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
          />

          <div className="flex flex-col text-start justify-between p-6 space-y-8">
            <div className="space-y-2">

              <h2 className="text-2xl text-gray-700 text-start font-semibold">
                {tripTitle}
              </h2>

              <p className="font-medium">
                Tour Type : {type}
              </p>

              <button
              className="btn-grad btn-grad:hover w-full text-sm font-bold">
              view package
            </button>          
            </div>

            <div className="flex text-[15px] justify-between text-red-600 font-medium">
                <div><FaLocationDot className="inline text-slate-600"></FaLocationDot> {place} </div>
                <div><FaClock className="inline text-slate-600"></FaClock>  {tourPlan.length}days </div>
                <div><FaCalendar className="inline text-slate-600"></FaCalendar>  {date}</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
