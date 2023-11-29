import React from "react";
import { FaHouse } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import SectionTitle from "../shared components/SectionTitle";
import { FaBookmark, FaHeart } from "react-icons/fa";

function Dashboard(props) {
  // ----- user navlinks -----
  const userNavlinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/user-profile"
          className="flex items-center gap-1 text-lg">
          <span>
            <CgProfile></CgProfile>
          </span>
          <span>My Profile</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/user-bookings"
          className="flex items-center gap-1 text-lg">
          <span>
            <FaBookmark></FaBookmark>
          </span>
          <span>Bookings</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/wishlist"
          className="flex items-center gap-1 text-lg">
          <span>
            <FaHeart></FaHeart>
          </span>
          <span>Wishlist</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* ===================-dahsboard side navbar starts=================== */}
        <div className="dash-bg lg:w-1/5 md:px-4">
          <div className="my-5 uppercase md:my-10 flex gap-2 justify-center items-center">
            <Link to="/" className="md:hidden">
              <FaHouse className="text-2xl"></FaHouse>
            </Link>
            <SectionTitle>dashboard</SectionTitle>
          </div>

          {/* ===== nav ul start ========== */}
          <ul className="flex md:tracking-wider text-sm md:text-base md:flex-col gap-2 md:gap-5">
            {userNavlinks}

            <div className="divider"></div>

   
            <li className="hidden md:block">
              <NavLink
                to="/"
                className="flex items-center gap-1 text-lg">
                <span>
                  <FaHouse></FaHouse>
                </span>
                <span>Home</span>
              </NavLink>
            </li>

            <li className="hidden md:block">
              <NavLink
                to="/about"
                className="flex items-center gap-1 text-lg">
                <span>
                  <GrGroup></GrGroup>
                </span>
                <span>About Us</span>
              </NavLink>
            </li>

            <li className="hidden md:block">
              <NavLink
                to="/contact"
                className="flex items-center gap-1 text-lg">
                <span>
                  <MdOutlinePhoneInTalk></MdOutlinePhoneInTalk>
                </span>
                <span>Contact Us</span>
              </NavLink>
            </li>

          </ul>
        </div>

        {/* ===================  CONTENT outlet starts heree ================== */}
        <div className="flex-1 min-h-screen mx-2 md:mx-10 border border-black my-5">
          <Outlet></Outlet>
        </div>
      </div>

    </>
  );
}

export default Dashboard;
