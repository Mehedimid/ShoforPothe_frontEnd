import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/groovyWalk.json";

function Loading(props) {
  return (
    <div className="my-32 flex justify-center items-center">
      <Lottie
        animationData={groovyWalkAnimation}
        loop={true}
        className="w-[300px] text-center"
      />
    </div>
  );
}

export default Loading;
