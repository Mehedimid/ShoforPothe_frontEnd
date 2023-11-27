import video_bg from "../assets/banner2.mp4"

function Banner(props) {
    return (
        <div className="absolute  w-screen left-0 right-0">
            <video className=" h-[100vh] w-full object-cover" src={video_bg} autoPlay loop muted></video>
        </div>
    );
}

export default Banner;