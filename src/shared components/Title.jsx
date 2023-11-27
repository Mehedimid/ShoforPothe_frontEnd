import React from "react";

function Title({ subHeading, heading, description }) {
  return (
    <div>
      <div className=" uppercase text-center space-y-3">
        <h5 className="  text-red-800 font-semibold">{subHeading}</h5>
        <h1 className=" text-3xl md:text-5xl font-bold text-gray-700">
          {heading}
        </h1>
        <p className="md:w-2/3 mx-auto text-sm">
          Journey through Bangladesh's untamed wilderness, where mangrove
          forests and diverse wildlife thrive in stunning harmony.
        </p>
      </div>
    </div>
  );
}

export default Title;