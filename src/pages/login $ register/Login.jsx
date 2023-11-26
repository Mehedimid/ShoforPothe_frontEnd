import React from "react";
import Lottie from "lottie-react";
import animationLogin from "../../assets/animationLogin.json";

function Login(props) {
  return (
    <>
      <section id="login">

      <div>
        <Lottie animationData={animationLogin} loop={true} />;
      </div>

      <div>
        
      </div>

      </section>

    </>
  );
}

export default Login;
