import React from 'react';
import ShadowTitle from '../../shared components/ShadowTitle';
import SectionCover from '../../shared components/SectionCover';
import usePackages from '../../hooks/usePackages';
import PackageCard from '../../components/PackageCard';
import Title from '../../shared components/Title';
import Loading from '../../shared components/Loading';

function AllPackages(props) {
    
   const [packages, isPending] = usePackages()

   if(isPending) {
    return <Loading></Loading>
   }

    return (
        <div>
      <SectionCover img={"https://img.freepik.com/premium-photo/travel-suitcase-with-hat-nature-beautiful-mountain-landscape-mist_55877-327.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=sph"} heading={"Explore Popular Tours"}></SectionCover>
      

       <div className='py-20 sizing'>

       <div className="flex flex-wrap  gap-10 justify-center lg:gap-20">
        {packages.length > 0
          ? packages.map((item) => (
             <div key={item._id} className='w-80'> <PackageCard item={item}></PackageCard></div>
            ))
          : "no package available"}
      </div>
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
       </div>
            
        </div>
    );
}

export default AllPackages;