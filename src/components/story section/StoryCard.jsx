import React from "react";
import { Link } from "react-router-dom";

function StoryCard({ item }) {
  const { type, title, image, location, description, userName, _id } = item;
  return (
    <div
      className="shadow-xl hover:scale-110 transition-all duration-500 "
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
      <div className="group  h-80 relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transitions dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div className="flex-auto  bg-gradient-to-b from-black">
          <h3 className="text-xl text1 p-4">{title}</h3>
        </div>
        <div className="pt-0 p-4 md:p-6">
          <Link
            to={`/stories/${_id}`}
            className="inline-flex items-center bg-black bg-opacity-70 p-3 gap-2 text-sm font-medium text-white hover:scale-105 text1 transform duration-200">
            Visit the site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
