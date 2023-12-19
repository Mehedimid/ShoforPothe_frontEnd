import React from "react";
import useGuide from "../hooks/useGuide";
import SectionTitle from "../shared components/SectionTitle";
import GuideCard from "./GuideCard";
import { Link } from "react-router-dom";
import Loading from "../shared components/Loading";

function MeetGuide(props) {
  const [guides, isPending] = useGuide();

  if(isPending) {
    return <Loading></Loading>
  }

  return (
    <>
      <div className="  ">
        {/* <div className="mb-10">
          <SectionTitle>Meet Our Guides</SectionTitle>
        </div> */}

        {/* ---------- cards grid starts ----------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {guides.length > 0
            ? guides
                .slice(0, 3)
                .map((item) => (
                  <GuideCard key={item._id} item={item}></GuideCard>
                ))
            : "no guides available"}
        </div>

        {/* ---------- all guides button ------------ */}
        <div className="w-full md:w-3/12 mt-5 mx-auto">
          <Link
            to="/all-guides"
            className="section-btn text-center">
            See All Guides
          </Link>
        </div>
      </div>
    </>
  );
}

export default MeetGuide;
