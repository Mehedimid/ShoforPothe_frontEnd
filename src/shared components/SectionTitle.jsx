import React from 'react';

function SectionTitle({children}) {
    return (
        <div className='flex justify-center '>
            <h1 className='bg1 p-2 text-2xl font-bold capitalize text-gray-800'>
                {children}
            </h1>
        </div>
    );
}

export default SectionTitle;

// className="text-center capitalize title-font py-2  text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-[#DF826C] "