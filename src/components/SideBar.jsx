import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FiArrowRight } from "react-icons/fi";

function SideBar({setSideBar, handleLogOut}) {
    const {user} = useAuth()

  return (
    <>
      <div>
        {/* logOut and close button  */}
        <div className="flex justify-between  items-center py-5  bg-black bg-opacity-40">
          <button
            onClick={() => setSideBar(false)}
            className="bg-red-600 text-white p-1 shadow shadow-black rounded-full">
            <FiArrowRight className="font-bold text-2xl"></FiArrowRight>
          </button>
          <button onClick={handleLogOut} className="btn-grad btn-grad:hover ">
          Log Out
        </button>
        </div>

        {/* profile */}
        <div className="bg-black py-10 min-h-[100px]">
          <div>
            <img src={user?.photoURL} className="w-20 h-20 rounded-full border-white border-2 border-dotted mx-auto" />
            <h2 className="text-lg font-bold text-center mt-3 mb-1 text-white">{user?.displayName}</h2>
            <p className="italic text-sm text-center text-white">{user?.email}</p>
          </div>
        </div>

        {/* dashboard links  */}
        <div className="my-10">
          <ul className="flex flex-col gap-2 text-white">
            <NavLink className="w-full py-1 pl-4 bg-neutral-700 font-semibold mx-auto" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="w-full py-1 pl-4 bg-neutral-700 font-semibold mx-auto" to="/Offer">
              Offer Announcement
            </NavLink>
          </ul>
        </div>



  
      </div>
    </>
  );
}

export default SideBar;
