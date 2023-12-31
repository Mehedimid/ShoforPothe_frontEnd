import React from 'react';
import useGallary from '../hooks/useGallary';
import Title from '../shared components/Title';
import TypeCard from '../components/TypeCard';
import Loading from '../shared components/Loading';

function TourType(props) {

    const [gallary, isPending] = useGallary()

    if(isPending){
      return <Loading></Loading>
    }

    return (
        <>
          <section className=' py-12 sizing2'>

            <div className='py-5'>
                <Title subHeading={'Find The Best Tour'} heading={'Chose Tour Type'} description={' '} ></Title>
            </div>

            <div className='flex flex-col md:flex-row gap-7'>
                {
                 gallary?.length>0 && gallary?.map((item) => <TypeCard key={item._id} type={item}></TypeCard> )
                }
            </div>
           
          </section>
        </>
    );
}

export default TourType;