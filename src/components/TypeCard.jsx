import React from "react";
import { Link } from "react-router-dom";

function TypeCard({ type }) {
  return (
    <div>
      <div className="my-10 uppercase">
        <Link to={`/package-type/${type.type}`}>
          {" "}
          <div className="flex justify-center">
            <img
              src={type.banner}
              className="round animate-pulse z-0 w-40 h-40 hover:w-44 hover:h-44 hover:brightness-50 hover:animate-none"
            />
          </div>
          <div>
            <h1 className="text-center text-xl my-text-color  mt-5">
              {type?.type}
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TypeCard;
