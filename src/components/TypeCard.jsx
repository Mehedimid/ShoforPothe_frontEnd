import React from "react";
import { Link } from "react-router-dom";

function TypeCard({ type }) {
  return (
    <div className="md:w-1/5">
      <Link to={`/package-type/${type.type}`} className="relative">
        <img src={type?.banner} className="h-44 w-full rounded-t-full object-cover" />
        <div className="absolute top-0 w-full text-center rounded-t-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-70 opacity-0 hover:opacity-100 transition-all duration-200">
          <p className="text4 text-xl">View Tours</p>
        </div>
      </Link>
      <h1 className="text-center capitalize mt-2 text1 font-bold text-xl">{type?.type}</h1>
    </div>
  );
}

export default TypeCard;

