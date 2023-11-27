import React from "react";
import PackageCard from "./PackageCard";
import usePackages from "../hooks/usePackages";
import SectionTitle from "../shared components/SectionTitle";
import { Link } from "react-router-dom";

function PopularPackages(props) {
  const [packages, isPending] = usePackages();
  const popular = packages?.filter(item=>item.category == 'popular')

  return (
    <div className="bg-orange-50 py-10 px-2 ">
      <div className="mb-10">
        <SectionTitle>Our Popular Packages</SectionTitle>
      </div>
       
       {/* ---------- cards grid starts ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular.length > 0
          ? popular.map((item) => (
              <PackageCard key={item.id} item={item}></PackageCard>
            ))
          : "no package available"}
      </div>

    {/* ---------- all package button ------------ */}
      <div className="w-full md:w-1/2 my-7 mx-auto">
        <Link
          to="/all-packages"
          className="btn-grad btn-grad:hover animate-pulse">
          see All packages
        </Link>
      </div>

    </div>
  );
}

export default PopularPackages;