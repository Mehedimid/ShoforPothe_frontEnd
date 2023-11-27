import React from "react";

function AbsoluteOverview(props) {
  return (
    <div className="w-44 h-[480px] hidden text-black md:block  absolute rounded-3xl bg-orange-100 -left-28 top-0 bottom-0 my-auto">
      <div className="flex flex-col justify-center items-center">

        <div className="flex flex-col  gap-3 ">
          <div className="rounded-full mt-5 mx-5 p-5 text-black border-2 border-red-600">
            90%
          </div>
          <p className="text-center mb-5">Best Places </p>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col  gap-3">
          <div className="rounded-full mx-5 p-5 border-2 border-red-600">
            80%
          </div>
          <p className="text-center mb-5">Satisfied Client </p>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col  gap-3">
          <div className="rounded-full mx-5 p-5 text-black border-2 border-red-600">
            95%{" "}
          </div>
          <p className="text-center mb-5">Budget Price</p>
        </div>
      </div>

    </div>
  );
}

export default AbsoluteOverview;
