import React from 'react';
import useGuide from '../../hooks/useGuide';
import GuideCard from '../../components/GuideCard';
import SectionCover from '../../shared components/SectionCover';
import Title from '../../shared components/Title';
import Loading from '../../shared components/Loading';

function AllGuides(props) {
    const [guides, isPending] = useGuide()

    if(isPending) {
     return <Loading></Loading>
    }
 
     return (
         <>
 
        <div className="hidden lg:block">
        <SectionCover img='https://img.freepik.com/free-photo/front-view-young-male-preparing-hiking-observing-map_179666-41609.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=ais' shadowText={'all guides'}heading={'meet our all wonderful guides'}></SectionCover>
        </div>
 
        <div className='lg:hidden mt-20'>
           <Title subHeading={'all guides'} heading={'meet our all wonderful guides'}></Title>
        </div>
 
        <div className='my-24'>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {guides.length > 0
           ? guides.map((item) => (
               <GuideCard key={item._id} item={item}></GuideCard>
             ))
           : "no package available"}
       </div>
         
        </div>
             
         </>
     );
}

export default AllGuides;