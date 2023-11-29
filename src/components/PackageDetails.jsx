import React from 'react';
import usePackages from '../hooks/usePackages';
import { useParams } from 'react-router-dom';
import useGallary from '../hooks/useGallary';
import Loading from '../shared components/Loading';
import Gallary from './pack_detail_compos/Gallary';

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
        <div className='my-24'>

            {/* ------ gallary div ------- */}
            <div> 
                <Gallary gallary={typeGallary}></Gallary>
            </div>

        </div>
    );
}

export default PackageDetails;