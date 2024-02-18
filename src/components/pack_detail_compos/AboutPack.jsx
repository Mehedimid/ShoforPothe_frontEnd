import React from "react";
import Title from "../../shared components/Title";
import SectionTitle from "../../shared components/SectionTitle";
import TourPlan from "./TourPlan";

function AboutPack({ pack }) {
  const { image, type, tripTitle, price, place, tourPlan } = pack;

  // console.log(pack);
  return (
    <div>
      <div>
        <Title
          heading={"about the tour"}
          subHeading={"Tour details"}
          description={" "}></Title>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-8">
        {/* image */}
        <div
          className="md:w-1/2 h-52 md:h-96 relative border-4 rounded-md border-[#DF826C] shadow-xl shadow-transparent"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 px-5 pt-40 pb-5">
            <div className="text-white text1 font-bold text-lg capitalize flex justify-between">
              <p className="text-base md:text-lg">type: {type} </p>
              <p className="text-base md:text-2xl">{price}$/person</p>
            </div>
          </div>
        </div>

        {/* content  */}
        <div className="flex flex-col items-center justify-center relative md:w-1/2">
          <div className="text-center">
            <SectionTitle>{tripTitle}</SectionTitle>
          </div>
          <p className="font-bold my-3 text-xl">Location: {place}</p>
          <p className="text-lg capitalize">
            Tour Length: {tourPlan?.length} days
          </p>

          {/* tour plan start  */}
          <div className=" mt-5">
            <TourPlan pack={pack}></TourPlan>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPack;
