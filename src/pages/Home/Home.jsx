import React from 'react';
import Header from './Header';
import TourismSection from './TourismSection';

function Home(props) {
    return (
        <>
           <Header></Header>

           <section className='my-32'>
            <TourismSection></TourismSection>
           </section>
        </>
    );
}

export default Home;