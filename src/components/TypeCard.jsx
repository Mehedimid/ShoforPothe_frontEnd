import React from "react";
import { Link } from "react-router-dom";

function TypeCard({ type }) {
  return (
    <div>
      <div className=" uppercase h-56">
        <Link to={`/package-type/${type.type}`}>
          {" "}
          <div className="flex justify-center relative round mx-auto w-40 h-40 hover:w-44 hover:h-44 transition-all duration-700">
            <img
              src={type.banner}
              className="round z- w-full h-full shadow-xl shadow-gray-400"
            />
            <div className="text-white absolute flex justify-center items-center round  h-full top-0 w-full text-center opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-60 hover:brightness-50 transition-all duration-500 font-bold">
              <p>view tours</p>
            </div>
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
