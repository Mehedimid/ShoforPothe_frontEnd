import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Google(props) {
  return (
    <div>
      <Link>
        <div className="bg-white hover:bg-neutral-200 flex items-center gap-2 text-2xl font-bold w-fit mx-auto px-16 py-2 border-2 border-black rounded-lg">
          <FcGoogle></FcGoogle>
          <small>Log in with Google</small>
        </div>
      </Link>
    </div>
  );
}

export default Google;
