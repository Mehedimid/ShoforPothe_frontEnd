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
      <div className="bg-orange-50 py-10 px-2 ">
        <div className="mb-10">
          <SectionTitle>Meet Our Guides</SectionTitle>
        </div>

        {/* ---------- cards grid starts ----------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.length > 0
            ? guides
                .slice(0, 4)
                .map((item) => (
                  <GuideCard key={item._id} item={item}></GuideCard>
                ))
            : "no guides available"}
        </div>

        {/* ---------- all guides button ------------ */}
        <div className="w-full md:w-1/2 my-7 mx-auto">
          <Link
            to="/all-guides"
            className="btn-grad btn-grad:hover ">
            see All guides
          </Link>
        </div>
      </div>
    </>
  );
}

export default MeetGuide;
