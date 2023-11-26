import video_bg from "../../assets/banner2.mp4"

function Banner(props) {
    return (
        <div className="absolute  left-0 right-0">
            <video className="w-full h-[100vh] object-cover" src={video_bg} autoPlay loop muted></video>
        </div>
    );
}

export default Banner;