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
          <section className=' py-12'>

            <div>
                <Title subHeading={'tour type'} heading={'Types and activities'} ></Title>
            </div>

            <div className='grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-5 md:gap-0 lg:grid-cols-5'>
                {
                 gallary?.length>0 && gallary?.map((item) => <TypeCard key={item._id} type={item}></TypeCard> )
                }
            </div>
           
          </section>
        </>
    );
}

export default TourType;