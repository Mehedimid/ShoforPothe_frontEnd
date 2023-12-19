import React from "react";
import PackageCard from "./PackageCard";
import usePackages from "../hooks/usePackages";
import SectionTitle from "../shared components/SectionTitle";
import { Link } from "react-router-dom";
import Loading from "../shared components/Loading";

function PopularPackages(props) {
  const [packages, isPending] = usePackages();
  const popular = packages?.filter(item=>item.category == 'popular')

  if(isPending) {
    return <Loading></Loading>
  }

  return (
    <div className=" px-2 ">
      {/* <div className="mb-10">
        <SectionTitle>Our Popular Packages</SectionTitle>
      </div> */}
       
       {/* ---------- cards grid starts ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 ">
        {popular.length > 0
          ? popular.map((item) => (
              <PackageCard key={item._id} item={item}></PackageCard>
            ))
          : "no package available"}
      </div>

    {/* ---------- all package button ------------ */}
      <div className="w-10/12 md:w-3/12 mx-auto my-5">
        <Link
          to="/all-packages"
          className="section-btn text-center w-full">
          See All Packages
        </Link>
      </div>

    </div>
  );
}

export default PopularPackages;
