import React from 'react';
import Header from './Header';
import TourismSection from './TourismSection';
import TourType from '../TourType';
import StorySection from '../../components/story section/StorySection';

function Home(props) {
    return (
        <>
           <Header></Header>

           <section className='my-32 '>
            <TourismSection></TourismSection>
           </section>

           <section className="mb-32 sizing">
           <TourType></TourType>
           </section>

           <section className='sizing'>
            <StorySection></StorySection>
           </section>

        </>
    );
}

export default Home;