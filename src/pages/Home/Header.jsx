import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Logo from "../../components/Logo";

function Header(props) {
  return (
    <>
      <Banner></Banner>
      <div className="hero min-h-screen ">
        <div className="hero-content text-white text-center">
          <div className="md:w-2/3 ">
            <Logo text={'text-5xl'}></Logo>
            <p className="py-6">
            Start your journey with us and let the wonders of Bangladesh unfold before your eyes. Explore, experience, and create memories that last a lifetime!
            </p>
            <Link to='/register'><button className="btn-grad btn-grad:hover w-9/12 mx-auto">Register</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
