import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./banner.css";

function Banner(props) {
  return (
    <div className="border border-black relative banner ">

        {/* <div className="absolute banner top-0 right-0 left-0 bottom-0 bg-black"></div> */}

      <div className="hero min-h-screen bg-black bg-opacity-60 flex">
        <div className=" text-white text-center md:text-start flex justify-center md:w-3/4">
          <div className="md:w-2/3 ">
            <Logo text={"text-5xl"}></Logo>
            <p className="py-6 ">
              Start your journey with us and let the wonders of Bangladesh
              unfold before your eyes. Explore, experience, and create memories
              that last a lifetime!
            </p>
            <Link to="/register">
              <button className="btn-grad btn-grad:hover ">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

{
  /* <video className=" h-[100vh] w-full object-cover" src="https://cdn.coverr.co/videos/coverr-beautiful-valley-at-golden-hour-3055/1080p.mp4" autoPlay loop muted></video> */
}
{
  /* <img src="https://img.freepik.com/free-photo/man-sits-end-trolltunga-before-mountains_1304-5416.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=sph" className=" h-[100vh] w-full object-cover" /> */
}
