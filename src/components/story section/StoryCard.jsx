import React from "react";
import { Link } from "react-router-dom";

function StoryCard({item}) {
  const { type, title, image, location, description, userName, userEmail, _id } =
    item;
  return (
    <>
      <div className="flex flex-col max-w-lg py-3 bg-black text-red-300 space-y-6 overflow-hidden rounded-lg shadow-md shadow-red-300  dark:bg-gray-900 dark:text-gray-100 text-center ">
        <div className="flex space-x-4">

          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text font-semibold text-red-600 ml-2">
             <span className="text-lg">Story Writer</span> : <span className="uppercase">{userName}</span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-48 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">
            {title}
          </h2>
          <p className="text-sm text-gray-300">
            {description?.slice(0,100)}... <Link to={`/stories/${_id}`} className="font-bold uppercase text-white">see more</Link>
          </p>
        </div>

      </div>
    </>
  );
}

export default StoryCard;
