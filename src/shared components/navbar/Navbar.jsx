import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import SideBar from "../../components/SideBar";
import logo1 from "../../assets/logo1.png";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const { logOutUser, user } = useAuth();
  const [sideBar, setSideBar] = useState(false);
  const [navBg, setNavBg] = useState(false);

  // ---- log out function -----
  const handleLogOut = () => {
    logOutUser()
      .then(() => setSideBar(false))
      .catch((err) => console.error(err.message));
  };

  //  ------- dropdown for mobile view ------
  const handleDropdown = () => {
    setClick(!click);
    setNavBg(true);
  };

  // ------- nav bg change on scrolling -----------
  const changeBg = () => {
    if (window.scrollY > 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  const navlinks1 = (
    <>
      <li className="hover:text1 transition-all duration-300">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text1 transition-all duration-300">
        <NavLink to="/all-packages">Packages</NavLink>
      </li>
      <li className="hover:text1 transition-all duration-300">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="hover:text1 transition-all duration-300">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="hover:text1 transition-all duration-300">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`w-full max-w-[1800px] mx-auto fixed z-10 top-0 text-white ${
        navBg ? "bg-gray-800" : "bg-black bg-opacity-50"
      }`}>
      <div className="navbar  w-11/12 mx-auto">
        {/* ========== navbar start ============== */}
        <div className="navbar-start">
          {/*  start for medium & large*/}
          <Link to="/" className="hidden md:block ">
            <div className="flex items-center">
              {/* <img src={logo} className="w-20 h-16 object-cover " /> */}
              <div className="hidden md:block">
                <div className="flex items-center">
                  <img src={logo1} className="w-16 " />
                  <p className=" text-lg hidden lg:block">Shofor Pothe</p>
                </div>
              </div>
            </div>
          </Link>

          {/* start for mobile*/}
          <div className="md:hidden text2xl">
            <div className="-mt-3">
              <button onClick={handleDropdown}>
                <FiAlignJustify />
              </button>
            </div>

            <div
              className={`text-sm space-y-1 uppercase md:hidden  ${
                click ? "mt-0 list-none" : "-mt-72"
              } `}>
              {navlinks1}
            </div>
          </div>
        </div>

        {/* ======= navbar center  ====== */}
        <div className="hidden md:flex">
        <ul className="uppercase text-sm items-center gap-5 md:gap-8 lg:gap-10 navbar-center flex font-medium">
            {navlinks1}
          </ul>
        </div>

    

        {/* ========= navbar end ========== */}
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2">
              <img
                onClick={() => setSideBar(!sideBar)}
                src={user?.photoURL}
                className="w-12 h-12 rounded-full bg-white hover:cursor-pointer hover:scale-110 transition-all duration-500 border-4 border-[#DF826C]"
              />
            </div>
          ) : (
            <Link to="/login">
              <button className="my-btn ">LogIn</button>
            </Link>
          )}
        </div>
      </div>

      {/* ========sidebar==== */}

      {sideBar && (
        <div className="sidebar text-black bg-neutral-800 w-64 h-screen  fixed top-0 right-0 z-50 transition duration-500">
          <SideBar
            handleLogOut={handleLogOut}
            setSideBar={setSideBar}></SideBar>
        </div>
      )}
    </div>
  );
}

export default Navbar;
