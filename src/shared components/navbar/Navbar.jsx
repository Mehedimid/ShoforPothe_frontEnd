import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineAlignLeft } from "react-icons/ai";

function Navbar(props) {
  const [click, setClick] = useState(false)


  const navlinks1 = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full fixed top-0   text-white  bg-opacity-30 bg-black">
      <div className="navbar  w-11/12 mx-auto">

        {/* ========== navbar start ============== */}
        <div className="navbar-start">
          {/*  start for large*/}
          <div className="hidden md:block">
            <Logo></Logo>
          </div>

          {/* start for mobile*/}
          <div className="md:hidden text-2xl">
            <button onClick={()=>setClick(!click)}><AiOutlineAlignLeft /></button>
            <div id="sideNav" className={`text-base md:hidden ${click? 'mt-0' :'-mt-52' } `}>
            {navlinks1}
            </div>
          </div>
        </div>

        {/* ======= center navlinks ====== */}
        <div className="hidden md:flex">
          <ul className=" items-center gap-4 navbar-center flex font-medium">{navlinks1}</ul>
        </div>

        {/* ========= login logOut ========== */}
        <div className="navbar-end">
          <Link className="my-btn">
            <button>LogIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
