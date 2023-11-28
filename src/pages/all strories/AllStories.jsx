import React from 'react';
import SectionCover from '../../shared components/SectionCover';
import useStories from '../../hooks/useStories';
import StoryCard from '../../components/story section/StoryCard';
import Title from '../../shared components/Title';
import Loading from '../../shared components/Loading';

function AllStories(props) {
    const [stories, isPending] = useStories()

    if(isPending){
        return <Loading></Loading>
      }

    return (
        <>

        <div className="hidden lg:block">
        <SectionCover img='https://img.freepik.com/premium-vector/camping-mountains-sunset-scene-vector-illustration_263779-1350.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=sph' shadowText={'all stories'}heading={'see our travellers stories'}></SectionCover>
        </div>
 
        <div className='lg:hidden mt-20'>
           <Title subHeading={'all stories'} heading={'see our travellers stories'}></Title>
        </div>
 
        <div className='my-24'>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {stories.length > 0
           ? stories.map((item) => (
               <StoryCard key={item.id} item={item}></StoryCard>
             ))
           : "no package available"}
       </div>
         
        </div>
             
         </>
    );
}

export default AllStories;