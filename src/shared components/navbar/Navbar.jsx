import React, { useState } from "react";
import Logo from "../../components/Logo";
import logo from "../../assets/remove-bg.png";
import { Link, NavLink } from "react-router-dom";
import { FiAlignJustify,} from "react-icons/fi";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const navlinks1 = (
    <>
      <li>
        <NavLink  to="/">Home</NavLink>
      </li>
      <li>
        <NavLink  to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink  to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink  to="/about">About</NavLink>
      </li>
      <li>
        <NavLink  to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-opacity-90   text-white  bg-black">
      <div className="navbar  w-11/12 mx-auto">

        {/* ========== navbar start ============== */}
        <div className="navbar-start">
          {/*  start for medium & large*/}
          <Link to="/" className="hidden md:block ">
            <div className="flex items-center">
              <img src={logo} className="w-20 h-16 object-cover animate-spin" />
              <div className="hidden lg:block">
                <Logo text={"text-2xl"}></Logo>
              </div>
            </div>
          </Link>

          {/* start for mobile*/}
          <div className="md:hidden text-2xl">
            <div className="-mt-3">
              <button onClick={() => setClick(!click)}>
                <FiAlignJustify />
              </button>
            </div>

            <div
              className={`text-sm space-y-1 uppercase md:hidden ${click ? "mt-0 list-none" : "-mt-72"} `}>
              {navlinks1}
            </div>
          </div>
        </div>

        {/* ======= center navlinks ====== */}
        <div className="hidden md:flex">
          <ul className="uppercase text-sm items-center gap-4 navbar-center flex font-medium">
            {navlinks1}
          </ul>
        </div>

        {/* ========= login logOut ========== */}
        <div className="navbar-end">
          <Link to='/login' className="my-btn">
            <button>LogIn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
