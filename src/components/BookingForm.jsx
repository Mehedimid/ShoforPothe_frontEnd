import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";
import Title from "../shared components/Title";
import useGuide from "../hooks/useGuide";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function BookingForm({ pack }) {
  const { user } = useAuth();
  const [guides] = useGuide();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedGuide, setSelectedGuide] = useState("");
  const [showMod, setShowMod] = useState()

  const handleGuideChange = (e) => {
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
    const photo = form.photo.value;
    const price = form.price.value;
    const date = form.date.value;
    const guideName = selectedGuide;
    const bookingInfo = {
      name,
      email,
      photo,
      price,
      pack,
      date,
      guideName,
    };
    console.log(bookingInfo);

      axiosPublic.post("/bookings", bookingInfo).then((res) => {
        
        if (res.data.insertedId) {
          console.log(res.data)
          Swal.fire({
            icon: "success",
            title: "congrates!!",
            text: "Confirm Your Booking!",
            footer: '<a  href="/dashboard/user-bookings">Click to See Your Bookings</a>'
          });
        }
      });

      form.reset();

  };

  return (
    <>
      <div>
        <Title
          description={" "}
          subHeading={"book now"}
          heading={"Book Your favourite package"}></Title>
      </div>

      <div className="border w-9/12 mx-auto  bg-red-100 min-h-[200px] mt-12 md:px-16 py-5">
        {/* ====form ===*/}
        <form onSubmit={handleBook} className="shadow-xl space-y-6 ">
          {/* user name */}
          <div className="  space-y-3 ">
            <div className="">
              <h2 className="text-lg  text-slate-700">Your Name:</h2>
              <input
                defaultValue={user?.displayName}
                disabled={user ? true : false}
                type="text"
                placeholder=" Your Name"
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

            {/* user image  */}
            <div className="">
              <h2 className="text-lg  text-slate-700">Photo:</h2>
              <input
                required
                type="text"
                placeholder="type photo url"
                name="photo"
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
                  <option key={item._id} value={item?.name}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>

            {user && (
              <button
                type="submit"
                className="btn-grad w-full">
                Book Now
              </button>
            )}
          </div>
        </form>
        {!user && (
          <button onClick={handleGOLogin} className="mt-5 btn-grad w-full">
            Book Now
          </button>
        )}
      </div>

     
    
    </>
  );
}

export default BookingForm;
