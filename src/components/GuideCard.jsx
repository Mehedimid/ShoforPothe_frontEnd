import React from "react";
import { Link } from "react-router-dom";

function GuideCard({ item }) {
  const {
    name,
    image,
    email,
    phone,
    education,
    language,
    reviews,
    experience,
  } = item;

  return (
    <div>
      {/* <!-- Card Blog --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div>
    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <svg className="w-28 h-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>
          <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>
          <defs>
          <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0052CC"/>
          <stop offset="0.92" stop-color="#2684FF"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          Atlassian API
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          Atlassian
        </h3>
        <p className="mt-3 text-gray-500">
          A software that develops products for software developers and developments.
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          View sample
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          View API
        </a>
      </div>
    </div>
    {/* <!-- End Card --> */}



    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </div>
  );
}

export default GuideCard;


// <div className=" p-8  flex  rounded shadow-xl bg-base-200 shadow-gray-300  border-2 border-gray-300  ">
//         <div className="flex-shrink-0  mb-6  md:w-1/2 sm:mb-0">
//           <img
//             src={image}
//             alt=""
//             className="object-cover object-center w-full h-56  rounded dark:bg-gray-500"
//           />
//           <p className="text-center my-2 text-blue-800 ml-2 font-bold">
//             reviews({reviews.length})
//           </p>
//         </div>
//         <div className="flex ml-2 text-center flex-col space-y-4">
//           <div>
//             <h2 className="text-2xl font-semibold my-text-color">{name}</h2>
//             <span className="text-sm ">{education}</span>
//           </div>

//           <div className="my-5  text-sm font-semibold space-y-1">
//             <p>{experience} of experience</p>
//             <p>Languages: {language}</p>
//           </div>

//           {/* contact and review---------- */}
//           <div className="space-y-1">
//             <span className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 aria-label="Email address"
//                 className="w-4 h-4">
//                 <path
//                   fill="currentColor"
//                   d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
//               </svg>
//               <span className="">{email}</span>
//             </span>
//             <span className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 aria-label="Phonenumber"
//                 className="w-4 h-4">
//                 <path
//                   fill="currentColor"
//                   d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
//               </svg>
//               <span className="">{phone}</span>
//             </span>
//           </div>

//           <Link to={`/guide-details/${email}`} className="text-sm btn-grad">Details</Link>
          
//         </div>
//       </div>
