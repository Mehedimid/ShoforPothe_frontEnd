import React from "react";
import "./banner.css"
import Logo from "./Logo";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

function Banner(props) {
  const images = [
    "https://img.freepik.com/free-photo/breathtaking-view-mountain-cliffs-ocean-beautiful-blue-sky_181624-7797.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=ais",
    "https://img.freepik.com/premium-photo/sunset-landscape-conero-natural-park-dramatic-coast-headland-rocky-cliff-adriatic-sea-beautiful-sky-colorful-horizon-tourism-destination-italy_107467-3719.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=ais",
    "https://img.freepik.com/free-photo/grass-covered-sand-dunes_181624-38727.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=ais",
  ];

  return (
    <>
      <div className="border border-black  banner ">
        <div className="hero min-h-screen bg-black bg-opacity-70 flex">
          <div className=" text-white text-center mx-auto">
            <div className="">
            <h1 className="text-4xl md:text-6xl text-[#DF826C] banner-title-font font-normal">Travel And Adventure</h1>
              <p className="py-6 text-2xl font-bold text-[#F8FFD2]">
                Where Would You Like To GO?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

{
  /* <div className="relative">
<CarouselProvider
  naturalSlideWidth={100}
  naturalSlideHeight={50}
  totalSlides={images.length}
>
  <Slider>
    {images.map((image, idx) => (
      <Slide key={idx} index={idx}>
        <div className="flex items-center justify-center h-full absolute inset-0 bg-black bg-opacity-50">
          <div className="text-white text-center flex justify-center md:w-3/4">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-6xl text-[#DF826C]">Travel And Adventure</h1>
              <p className="py-6 text-2xl font-bold text-[#F8FFD2]">
                Where Would You Like To GO?
              </p>
            </div>
          </div>
        </div>
      </Slide>
    ))}
  </Slider>
  <ButtonBack>Back</ButtonBack>
  <ButtonNext>Next</ButtonNext>
</CarouselProvider>
</div> */
}

// ========================================
{
  /* <video className=" h-[100vh] w-full object-cover" src="https://cdn.coverr.co/videos/coverr-beautiful-valley-at-golden-hour-3055/1080p.mp4" autoPlay loop muted></video> */
}
{
  /* <img src="https://img.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5416.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=sph" className=" h-[100vh] w-full object-cover" /> */
}
