import React from 'react';

function SectionTitle({children}) {
    return (
        <div className='flex justify-center'>
            <h1 className="text-center text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-red-600 animate-bounce">
                {children}
            </h1>
        </div>
    );
}

export default SectionTitle;