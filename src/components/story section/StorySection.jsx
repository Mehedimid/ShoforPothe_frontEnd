import React from 'react';
import useStories from '../../hooks/useStories';
import Title from '../../shared components/Title';
import StoryCard from './StoryCard';
import { Link } from 'react-router-dom';
import Loading from '../../shared components/Loading';

function StorySection(props) {
   const [stories, isPending] = useStories()

   if(isPending){
    return <Loading></Loading>
  }

    return (
        <>
        <section className='mb-24 bg-orange-50 p-3'>

            <div>
                <Title heading={'OUR RECENT STORIES'} subHeading={'LATEST BLOG'}></Title>
            </div>


            <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                 stories?.length && stories?.slice(0,3).map(item => <StoryCard key={item._id} item={item}></StoryCard>)
                }
            </div>

            <div className="w-full md:w-1/2 my-7 mx-auto">
        <Link
          to="/all-stories"
          className="btn-grad btn-grad:hover ">
          see All stories
        </Link>
      </div>

        </section>

        </>
    );
}

export default StorySection;