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
        <>

       <div className="hidden lg:block">
       <SectionCover img='https://img.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_23-2149158786.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=sph' shadowText={'all packages'}heading={'explore our all available packages'}></SectionCover>
       </div>

       <div className='lg:hidden mt-20'>
          <Title subHeading={'all packages'} heading={'explore our all available packages'}></Title>
       </div>

       <div className='my-24'>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.length > 0
          ? packages.map((item) => (
              <PackageCard key={item._id} item={item}></PackageCard>
            ))
          : "no package available"}
      </div>
        
       </div>
            
        </>
    );
}

export default AllPackages;