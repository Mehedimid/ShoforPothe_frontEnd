import React from "react";
import Banner from "./Banner";
import Navbar from "../../shared components/navbar/Navbar";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Banner></Banner>

      <div className="hero min-h-screen ">
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <Logo text={'text-5xl'}></Logo>
            <p className="py-6">
            Start your journey with us and let the wonders of Bangladesh unfold before your eyes. Explore, experience, and create memories that last a lifetime!
            </p>
            <Link to='/register'><button className="btn-grad btn-grad:hover">Register</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
