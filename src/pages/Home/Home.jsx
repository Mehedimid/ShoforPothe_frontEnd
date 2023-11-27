import React from 'react';
import Header from './Header';
import TourismSection from './TourismSection';
import TourType from '../TourType';

function Home(props) {
    return (
        <>
           <Header></Header>

           <section className='my-32'>
            <TourismSection></TourismSection>
           </section>

           <section className="mb-32">
           <TourType></TourType>
           </section>
        </>
    );
}

export default Home;