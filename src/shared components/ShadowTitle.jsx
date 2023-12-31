import React from 'react';

function ShadowTitle({shadow, heading}) {
    return (
        <div>
        <h1 className="text-4xl w-fit font-bold relative uppercase">
          <span className=" absolute text-7xl opacity-20 -top-12 left-0 tracking-wider ">
            {shadow}
          </span>
          <span>{heading}</span>
        </h1>
      </div>
    );
}

export default ShadowTitle;