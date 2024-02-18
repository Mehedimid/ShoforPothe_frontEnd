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
      <div className="flex flex-wrap  gap-10 justify-between">
        {popular.length > 0
          ? popular.map((item) => (
            <div key={item._id} className='w-80'> <PackageCard item={item}></PackageCard></div>
            ))
          : "no package available"}
      </div>

    {/* ---------- all package button ------------ */}
      <div className="w-10/12 md:w-3/12 mx-auto my-5">
        <Link
          to="/all-packages"
          className="all-btn text-center w-full">
          See All Packages
        </Link>
      </div>

    </div>
  );
}

export default PopularPackages;
