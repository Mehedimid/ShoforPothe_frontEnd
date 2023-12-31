import React from 'react';
import usePackages from '../hooks/usePackages';
import { useParams } from 'react-router-dom';
import useGallary from '../hooks/useGallary';
import Loading from '../shared components/Loading';
import Gallary from './pack_detail_compos/Gallary';
import AboutPack from './pack_detail_compos/AboutPack';
import TourPlan from './pack_detail_compos/TourPlan';
import PackDetailGuides from './PackDetailGuides';
import BookingForm from './BookingForm';

function PackageDetails(props) {
    const [gallary, loadingGallary] = useGallary()
    const [packages ,isPending] = usePackages()
    const {id} = useParams()
    const pack = packages?.find(item=> item?._id == id)
    const typeGallary = gallary?.find(itm => itm?.type == pack?.type)

 

    if(loadingGallary || isPending) {
        return <Loading></Loading>
    }

    return (
        <div className='my-24 sizing'>

            {/* ------ gallary div ------- */}
            <div> 
                <Gallary gallary={typeGallary}></Gallary>
            </div>

            {/* ------- about the tour --------- */}
            <div className='mt-32'>
              <AboutPack pack={pack}></AboutPack>
            </div>

            {/* --------------tour plan---------- */}
            <div>
                <TourPlan pack={pack}></TourPlan>
            </div>

            {/* ------------ tour guides ------------ */}
            <div className='mt-32'>
                <PackDetailGuides></PackDetailGuides>
            </div>

            {/* -------------- booking form ------------ */}
            <div className='my-32'>
              <BookingForm pack={pack}></BookingForm>
            </div>

        </div>
    );
}

export default PackageDetails;