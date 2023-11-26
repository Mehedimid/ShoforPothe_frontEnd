import React from 'react';

function SectionTitle({children}) {
    return (
        <div className='flex justify-center'>
            <h1 className="text-center text-3xl font-bold">
                {children}
            </h1>
        </div>
    );
}

export default SectionTitle;