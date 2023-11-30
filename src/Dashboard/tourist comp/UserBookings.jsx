import React, { useState } from "react";
import Title from "../../shared components/Title";
import useBooking from "../../hooks/useBooking";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Loading from "../../shared components/Loading";

function UserBookings(props) {
  const {user} =useAuth()
  const [bookings, isPending, refetch] = useBooking();
  const axiosPublic = useAxiosPublic();
  const [status, setStatus] = useState("in review");
  const myBookings = bookings?.filter(item => item?.email == user?.email)

  const handleDeleteBook = (id) => {
    axiosPublic.delete(`/bookings/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Booking has been cancelled.",
          icon: "success",
        });
        refetch();
      }
    });
  };

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        <Title
          description={" "}
          subHeading={"book details "}
          heading={"user booking details"}>
          {" "}
        </Title>
      </div>

      <div className="bg-red-100">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white bg-red-800 font-semibold text-lg">
                <th>#</th>
                <th>Image</th>
                <th>Package</th>
                <th>Trip Date</th>
                <th>Tour guide</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myBookings?.map((item, idx) => (
                <tr
                  key={item._id}
                  className="py-3 border-b-2 border-red-600 text-lg font-medium">
                  <th>{idx + 1}</th>

                  <td>
                    <img src={item?.pack.image} className="w-52" />
                  </td>

                  <td>
                    <p>{item?.pack.tripTitle}</p>
                  </td>

                  <td>
                  <p>{item?.date}</p>
                  </td>

                  <td>
                    <p>{item?.guideName}</p>
                  </td>

                  <td>{status}</td>

                  <td>
                    <button
                      disabled={status !== "in review"}
                      onClick={() => handleDeleteBook(item?._id)}
                      className="btn btn-error">
                      cencel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserBookings;
