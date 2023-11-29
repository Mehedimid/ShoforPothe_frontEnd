import React from "react";
import usePackages from "../../hooks/usePackages";
import { useParams } from "react-router-dom";
import Loading from "../../shared components/Loading";
import SectionCover from "../../shared components/SectionCover";
import PackageCard from "../../components/PackageCard";
import Title from "../../shared components/Title";
import SectionTitle from "../../shared components/SectionTitle";

function TypePackages(props) {
  const [packages, isPending] = usePackages();
  const { type } = useParams();
  const typePackages = packages?.filter((item) => item.type == type);
  console.log(typePackages);

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <>

    <div className="hidden lg:block">
    <SectionCover img='https://img.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_23-2149158786.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=sph' shadowText={`${type} packages`} heading={`package available for ${type}`}></SectionCover>
    </div>

    <div className='lg:hidden mt-20'>
       <Title subHeading={`${type} packages`} heading={`package available for ${type}`} ></Title>
    </div>

    <div className='my-24'>

    <div className="grid grid-cols-1 mx-3 md:mx-20 lg:mx-32 gap-6">
     {typePackages.length > 0
       ? typePackages.map((item) => (
           <PackageCard key={item._id} item={item}></PackageCard>
         ))
       : <SectionTitle>no package available for this type</SectionTitle> }
   </div>
     
    </div>
         
     </>
  );
}

export default TypePackages;
