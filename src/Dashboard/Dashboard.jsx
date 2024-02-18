import React from "react";
import { FaHouse, FaManatSign, FaUser } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import SectionTitle from "../shared components/SectionTitle";
import { FaBookmark, FaHeart, FaUserAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useIsGuide from "../hooks/useIsGuide";

function Dashboard(props) {
  const {user} = useAuth()
  const [isAdmin] = useAdmin()
  const [isGuide] = useIsGuide()



  // console.log(isGuide, isAdmin)


      // ----- user navlinks -----
  const userNavlinks = (
    <>
      <li>
        <Link
          to="/dashboard/user-profile"
          className="flex items-center gap-1 text-lg">
          <span>
            <CgProfile></CgProfile>
          </span>
          <span>My Profile</span>
        </Link>
      </li>

      <li>
        <Link
          to="/dashboard/user-bookings"
          className="flex items-center gap-1 text-lg">
          <span>
            <FaBookmark></FaBookmark>
          </span>
          <span>Bookings</span>
        </Link>
      </li>

      <li>
        <Link
          to={`/dashboard/wishlist/${user?.email}`}
          className="flex items-center gap-1 text-lg">
          <span>
            <FaHeart></FaHeart>
          </span>
          <span>Wishlist</span>
        </Link>
      </li>
    </>
  );

  // ----- Guide navlinks -----
  const guideNavlinks = (
    <>
      <li>
        <Link
          to="/dashboard/guide-profile"
          className="flex items-center gap-1 text-lg">
          <span>
            <CgProfile></CgProfile>
          </span>
          <span>My Profile</span>
        </Link>
      </li>

      <li>
        <Link
          to="/dashboard/assigned-tours"
          className="flex items-center gap-1 text-lg">
          <span>
            <FaBookmark></FaBookmark>
          </span>
          <span>Assigned Tours</span>
        </Link>
      </li>

    </>
  );

    // ----- Admin navlinks -----
    const adminNavlinks = (
        <>
          <li>
            <Link
              to="/dashboard/admin-profile"
              className="flex items-center gap-1 text-lg">
              <span>
                <CgProfile></CgProfile>
              </span>
              <span>My Profile</span>
            </Link>
          </li>
    
          <li>
            <Link
              to="/dashboard/add-package"
              className="flex items-center gap-1 text-lg">
              <span>
                <FaManatSign></FaManatSign>
              </span>
              <span>Add Package</span>
            </Link>
          </li>
    
          <li>
            <Link
              to="/dashboard/manage-users"
              className="flex items-center gap-1 text-lg">
              <span>
                <FaUserAlt></FaUserAlt>
              </span>
              <span>Manage Users</span>
            </Link>
          </li>
        </>
      );



  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* ===================-dahsboard side navbar starts=================== */}
        <div className="bg2 md:dash-bg lg:w-1/5 md:px-4">
          <div className="my-5 uppercase md:my-10 flex gap-2 justify-center items-center">
            <Link to="/" className="md:hidden">
              <FaHouse className="text2xl"></FaHouse>
            </Link>
            <SectionTitle>dashboard</SectionTitle>
          </div>

          {/* ===== nav ul start ========== */}
          <ul >
            
            {user && !isAdmin && !isGuide && <div className="flex md:tracking-wider text-sm md:text-base md:flex-col gap-2 md:gap-5">{userNavlinks}</div> }
           {isGuide && <div className="flex md:tracking-wider text-sm md:text-base md:flex-col gap-2 md:gap-5">{guideNavlinks}</div> }     
          { isAdmin &&  <div className="flex md:tracking-wider text-sm md:text-base md:flex-col gap-2 md:gap-5">{adminNavlinks}</div>  }
            
            
            {/* {userNavlinks} */}

{/* ------------------------------------------------------------------------------ */}
            <div className="divider"></div>

            <li className="hidden md:block">
              <Link to="/" className="flex items-center gap-1 text-lg">
                <span>
                  <FaHouse></FaHouse>
                </span>
                <span>Home</span>
              </Link>
            </li>

            <li className="hidden md:my-3 md:block">
              <Link to="/about" className="flex items-center gap-1 text-lg">
                <span>
                  <GrGroup></GrGroup>
                </span>
                <span>About Us</span>
              </Link>
            </li>

            <li className="hidden md:block">
              <Link
                to="/contact"
                className="flex items-center gap-1 text-lg">
                <span>
                  <MdOutlinePhoneInTalk></MdOutlinePhoneInTalk>
                </span>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* ===================  CONTENT outlet starts heree ================== */}
        <div className="flex-1 min-h-screen mx-2 md:mx-10  my-5">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
