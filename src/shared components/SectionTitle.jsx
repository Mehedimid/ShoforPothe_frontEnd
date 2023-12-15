import React from 'react';

function SectionTitle({children}) {
    return (
        <div className='flex justify-center '>
            <h1 className="text-center uppercase title-font md:border-l-8 border-red-900 py-2 md:rounded-full md:pl-3 md:pr-3 text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-red-600 ">
                {children}
            </h1>
        </div>
    );
}

export default SectionTitle;