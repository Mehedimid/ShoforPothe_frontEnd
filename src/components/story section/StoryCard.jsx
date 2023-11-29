import React from "react";

function StoryCard({item}) {
  const { type, title, image, location, description, userName, userEmail } =
    item;
  return (
    <>
      <div className="flex flex-col max-w-lg p-6 bg-red-100 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">

          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text font-semibold my-text-color">
             <span className="text-lg">Story Writer</span> : {userName}
            </a>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">
            {title}
          </h2>
          <p className="text-sm dark:text-gray-400">
            {description.slice(0,100)}... <button className="p-2 uppercase bg-red-600 text-white rounded-3xl">view ful story</button>
          </p>
        </div>

      </div>
    </>
  );
}

export default StoryCard;
