import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";
import Title from "../shared components/Title";
import useGuide from "../hooks/useGuide";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useIsGuide from "../hooks/useIsGuide";

function BookingForm({ pack }) {
  const { user } = useAuth();
  const [guides] = useGuide();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedGuide, setSelectedGuide] = useState("");
  const [guideName, setGuideName] = useState("")
  const [isGuide] = useIsGuide();
  // console.log(guides);
  // console.log(selectedGuide);

  const handleGuideChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedGuideName = e.target.options[selectedIndex].text
    setGuideName(selectedGuideName)
    setSelectedGuide(e.target.value);
  };

  const handleGOLogin = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const guideEmail = selectedGuide;
    const bookingInfo = {
      touristName:user?.displayName,
      touristEmail:user?.email,
      tripPrice:pack?.price,
      tripTitle:pack?.tripTitle,
      tripImage:pack?.image,
      tripId:pack?._id,
      date,
      guideEmail,
      guideName
    };
    // console.log(bookingInfo);

    axiosPublic.post("/bookings", bookingInfo).then((res) => {
      if (res.data.insertedId) {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "congrates!!",
          text: "Confirm Your Booking!",
          footer:
            '<a  href="/dashboard/user-bookings" style="color: blue; font-size:20px; font-weight:bold; font-style:italic; text-decoration: underline;">Click to See Your Bookings</a>',
        });
      }
    });

    form.reset();
  };

  return (
    <>
      {/* section for the title  */}
      <div>
        <Title
          description={" "}
          subHeading={"book now"}
          heading={"Book Your favourite package"}></Title>
      </div>

      {/* section for the fORM  */}
      <div className="border w-9/12 mx-auto  bg-red-100 min-h-[200px] mt-12 md:px-16 py-5">
        {/* ====form ===*/}
        <form onSubmit={handleBook} className="shadow-xl space-y-6 ">
          {/* user name */}
          <div className="  space-y-3 ">
            <div className="">
              <h2 className="text-lg  text-slate-700">Your Name:</h2>
              <input
                type="text"
                placeholder="Type Your Name"
                name="name"
                className="border p-2  w-full border-red-600 rounded"
              />
            </div>

            {/* user email  */}
            <div className="">
              <h2 className="text-lg  text-slate-700">Your email:</h2>
              <input
                defaultValue={user?.email}
                disabled={user ? true : false}
                type="email"
                placeholder=" Your email"
                name="email"
                className="border p-2  w-full border-red-600 rounded"
              />
            </div>

            {/* price field  */}
            <div className="">
              <h2 className="text-lg  text-slate-700">Price:</h2>
              <input
                type="number"
                defaultValue={pack?.price}
                disabled
                placeholder="type photo url"
                name="price"
                className="border p-2  w-full border-red-600 rounded"
              />
            </div>

            {/* date field  */}
            <div className="">
              <h2 className="text-lg  text-slate-700">date:</h2>
              <input
                required
                type="date"
                placeholder="select date"
                name="date"
                className="border p-2  w-full border-red-600 rounded"
              />
            </div>

            {/* guide names field  */}
            <div>
              <h2 className="text-lg  text-slate-700">Chose Your Guide:</h2>
              <select
                className="select border p-2  border-red-600 rounded w-full text-lg  text-slate-700"
                required
                onChange={handleGuideChange}
                value={selectedGuide}>
                <option disabled value="">
                  Select Guide
                </option>
                {guides?.map((item) => (
                  <option key={item._id} value={item?.email}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>

            {user && !isGuide ? (
              <button type="submit" className="btn-grad w-full">
                Book Now
              </button>
            ) : (
              <button onClick={handleGOLogin} className="mt-5 btn-grad w-full">
                Book Now
              </button>
            )}
          </div>
        </form>
        {/* {!user && } */}
      </div>
    </>
  );
}

export default BookingForm;
