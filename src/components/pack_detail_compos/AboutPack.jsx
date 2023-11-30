import React from "react";
import Title from "../../shared components/Title";
import SectionTitle from "../../shared components/SectionTitle";

function AboutPack({ pack }) {
  const { image, type, tripTitle, price, place, tourPlan } = pack;

  // console.log(pack);
  return (
    <>
      <div>
        <Title
          heading={"about the tour"}
          subHeading={"keep enjoy"}
          description={" "}></Title>
      </div>
     
      <div className="md:grid grid-cols-2 gap-10 my-5">
        {/* image */}
        <div className="">
          <img src={image} className="w-full h-[150px] md:h-[350px]" />
        </div>

        {/* content  */}
        <div className="flex flex-col items-center justify-center relative">

          <div>
            <SectionTitle>{tripTitle}</SectionTitle>
          </div>
          <p className="font-bold my-3 text-lg">Tour Place: {place}</p>
          <p className="text-xl">type: {type}</p>
          <p className="text-2xl my-3 italic">{tourPlan?.length} days tour</p>
          <p className=" btn-grad my-3 w-full ">
            {price}$/person
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPack;
