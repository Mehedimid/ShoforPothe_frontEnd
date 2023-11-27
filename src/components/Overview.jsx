import YouTube from "react-youtube";
import { FaQuoteRight } from "react-icons/fa";
import AbsoluteOverview from "./AbsoluteOverview";
import ShadowTitle from "../shared components/ShadowTitle";

function Overview(props) {
  const url =
    "https://img.freepik.com/free-photo/sunset-with-silhoutte-birds-flying_335224-915.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=sph";

  const videoId = "Z1eA0kS8poE";

  const opts = {
    height: "590",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const bgStyle = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
  };

  return (
    <>
      <div className=" min-h-screen flex relative items-center" style={bgStyle}>
        <div className="flex justify-center text-white bg-opacity-70  bg-black w-full min-h-screen items-center gap-10 py-10 px-2 md:px-12 flex-col-reverse  lg:flex-row">
          {/* ------- video div ---------- */}
          <div className="w-full lg:w-1/2 h-full relative border-8 rounded-2xl border-white ">
            <AbsoluteOverview></AbsoluteOverview>
            <YouTube videoId={videoId} opts={opts} />
          </div>


          {/* ----------- text div ------------- */}
          <div className="lg:w-1/2 h-full">
          <ShadowTitle shadow={'go safe'} heading={'A Journey Through Beauty and Heritage'}></ShadowTitle>

            <p className="py-6 text-xs">
              Embark on a journey to Bangladesh, a land where the echoes of
              history resonate through its ancient monuments and vibrant
              culture. Discover a country adorned with natural splendor, from
              the lush greenery of its mangrove forests to the tranquil
              backwaters that weave through the landscapes. Bangladesh beckons
              travelers with its diverse tapestry, offering a glimpse into a
              world where traditions interlace seamlessly with modernity.
            </p>
            <p className="tracking-wider ">
              <FaQuoteRight className="inline text-gray-300 text-2xl"></FaQuoteRight>
              <span className="italic">
                "Traveling – it leaves you speechless, then turns you into a
                storyteller.{" "}
              </span>{" "}
              --Ibn Battuta
            </p>
          </div>
        </div>

        {/* <div className="absolute bg-black w-full h-full bg-opacity-50"></div> */}
      </div>
    </>
  );
}

export default Overview;
