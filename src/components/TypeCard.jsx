import React from "react";
import { Link } from "react-router-dom";

function TypeCard({ type }) {
  return (
    <div>
      <div className=" uppercase h-56">
        <Link to={`/package-type/${type.type}`}>
          {" "}
          <div className="flex justify-center relative">
            <img
              src={type.banner}
              className="round z-0 w-40 h-40 hover:w-44 hover:h-44 hover:brightness-50 transition-all duration-500"
            />

            {/* <p className="absolute hover:mt-10">view tours</p> //this line make me uncomfortable */}
          </div>
          <div>
            <h1 className="text-center text-gray-800 font-semibold  mt-5">
              {type?.type}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TypeCard;
