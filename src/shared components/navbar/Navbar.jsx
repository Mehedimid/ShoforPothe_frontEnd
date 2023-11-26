import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import logo from "../../assets/remove-bg.png";
import { Link, NavLink } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const { logOutUser, user } = useAuth();
  const [sideBar, setSideBar] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => setSideBar(false))
      .catch((err) => console.error(err.message));
  };

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
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-opacity-60 fixed z-10 top-0 text-white  bg-black">
      <div className="navbar  w-10/12 mx-auto">
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
              className={`text-sm space-y-1 uppercase md:hidden ${
                click ? "mt-0 list-none" : "-mt-72"
              } `}>
              {navlinks1}
            </div>
          </div>
        </div>

        {/* ======= navbar center  ====== */}
        <div className="hidden md:flex">
          <ul className="uppercase text-sm items-center gap-4 navbar-center flex font-medium">
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
                className="w-12 h-12 rounded-full bg-white hover:cursor-pointer hover:w-[50px] hover:h-[50px]"
              />
            </div>
          ) : (
            <Link to="/login">
              <button className="btn-grad btn-grad:hover">LogIn</button>
            </Link>
          )}
        </div>
      </div>

      {sideBar && (
        <div className="sidebar text-black bg-neutral-800 w-64 h-screen fixed top-0 right-0 z-50">
          <div>
            {/* name and close button  */}
            <div className="flex justify-between pr-2 items-center py-2 mb-2 bg-black">
              <button
                onClick={() => setSideBar(false)}
                className="bg-red-600 text-white w-10 h-10 shadow shadow-black rounded-full">
                X
              </button>
              <span className="text-red-600 font-bold italic">
                {user?.displayName}
              </span>
            </div>

            {/* dashboard links  */}
            <div className="my-10">
              <ul className="flex flex-col gap-2 text-white">
                <NavLink
                  className="w-fit font-semibold mx-auto"
                  to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink className="w-fit font-semibold mx-auto" to="/Offer">
                  Offer Announcement
                </NavLink>
              </ul>
            </div>

            <div className="divider"></div>

            {/* log out button  */}
            <button onClick={handleLogOut} className="btn-grad btn-grad:hover ">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
