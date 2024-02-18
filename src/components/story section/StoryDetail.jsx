import React from 'react';
import Title from '../../shared components/Title';
import useStories from '../../hooks/useStories';
import { useParams } from 'react-router-dom';

function StoryDetail(props) {
    const [stories, isPending] = useStories()
    const {id} = useParams()
    const myStory = stories?.find(item => item._id == id)
//     const {

// type,
// title,
// image,
// location,
// description,
// userName,
// userEmail,
//     } = myStory

    return (
        <div className='my-24 space-y-10'>

            <div>
                <Title subHeading={myStory?.type} heading={myStory?.title}></Title>
            </div>



            <div className="flex flex-col mx-2 md:flex-row gap-10 items-center justify-center">

                <div className='md:w1/2'>
                <img src={myStory?.image} className="h-[150px] md:h-[250px] w-full" />
                </div>

                <div className='md:w-1/2'>
                  <p className='my-text-color text2xl'>story witer: {myStory?.userName}</p>
                  <p className="my-10 text-xl ">story: <small>{myStory?.description}</small></p>
                </div>
            </div>
            
        </div>
    );
}

export default StoryDetail;