import React from "react";
import Banner from "./Banner";
import Navbar from "../../shared components/navbar/Navbar";

function Header(props) {
  return (
    <>
      <Banner></Banner>

      <Navbar></Navbar>

      <div className="hero min-h-screen ">
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Shofor <span className="text-red-500">Pothe</span> LTD.</h1>
            <p className="py-6">
            Start your journey with us and let the wonders of Bangladesh unfold before your eyes. Explore, experience, and create memories that last a lifetime!
            </p>
            <button className="my-btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
