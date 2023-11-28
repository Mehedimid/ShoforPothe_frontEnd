import React from 'react';
import ShadowTitle from './ShadowTitle';

function SectionCover({shadowText, heading, img}) {
    return (
        <div className='relative w-full'>

           <div className=''>
           <img src={img} className='brightness-50 w-full h-[70vh]'/>

           </div>

            <div className='h-[70vh] absolute flex justify-center items-center top-0 right-0 left-0 text-white'>
           
                <ShadowTitle shadow={shadowText} heading={heading}></ShadowTitle>
            
            </div>
   
        </div>
    );
}

export default SectionCover;