import React from "react";
import ShadowTitle from "./ShadowTitle";

function SectionCover({heading, img }) {
  return (
    <>
      <div className="relative h-[90vh] md:h-[70vh] w-full">
        <img
          src={img}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 right-0 left-0 lw-full  h-full bg-black bg-opacity-70  flex justify-center items-center">
          <div className="w-11/12 mx-auto text-center md:text-start">
            <h1 className="text-white font-bold title-font text-3xl md:text-5xl">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCover;
