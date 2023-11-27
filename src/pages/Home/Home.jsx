import React from 'react';
import Header from './Header';
import Overview from '../../components/Overview';

function Home(props) {
    return (
        <>
           <Header></Header>

           <section className='my-32'>
            <Overview></Overview>
           </section>
        </>
    );
}

export default Home;