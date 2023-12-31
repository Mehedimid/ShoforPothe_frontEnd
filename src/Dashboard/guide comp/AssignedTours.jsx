import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../shared components/Title";
import Swal from "sweetalert2";
import useBooking from "../../hooks/useBooking";
import Loading from "../../shared components/Loading";

function AssignedTours(props) {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [status, setStatus] = useState("Pending");
  const [bookings, isPending, refetch] = useBooking();

  const guideBookings = bookings?.filter(
    (item) => item?.guideEmail == user?.email
  );

  const handleDeleteBook = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.patch(`/bookings/reject/${id}`);
        console.log(res.data);
        if(res.data.modifiedCount>0){
          Swal.fire("You reject this trip!");
          refetch()
        }
      }
    });
  };

  const handleAcceptBook = async (id) => {
    const res = await axiosPublic.patch(`/bookings/accept/${id}`);
    console.log(res.data);
    if(res.data.modifiedCount>0){
      Swal.fire("Your Review has been added!");
      refetch()
    }
   
  };

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        <Title
          description={" "}
          subHeading={"all type"}
          heading={"My assigned tours"}>
          {" "}
        </Title>
      </div>

      <div className="bg-red-100 mt-10">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white bg-red-800 font-semibold text-base ">
                <th>#</th>
                <th>Image</th>
                <th>Package</th>
                <th>Trip Date</th>
                <th>Tourist details</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {guideBookings?.map((item, idx) => (
                <tr
                  key={item._id}
                  className="py-3 border-b-2 border-red-600 text-lg font-medium shadow-lg shadow-black">
                  <th>{idx + 1}</th>

                  <td>
                    <img src={item?.tripImage} className="w-52" />
                  </td>

                  <td>
                    <p>{item?.tripTitle}</p>
                  </td>

                  <td>
                    <p className="text-base">{item?.date}</p>
                  </td>

                  <td>
                    <p className="text-base">
                      <span className="font-bold">{item?.touristName}</span>{" "}
                      <br />
                      <small>{item?.touristEmail}</small>
                    </p>
                  </td>

                  <td>
                    <div className="flex items-center justify-center gap-1 my-auto">
                      {item?.status ? (
                        <span className="text-orange-500 font-bold text-lg">
                          {item?.status}
                        </span>
                      ) : (
                        <>
                          {" "}
                          <button
                            // disabled={status !== "in review"}
                            onClick={() => handleDeleteBook(item?._id)}
                            className="btn btn-error btn-sm">
                            Reject
                          </button>
                          <button
                            // disabled={status !== "in review"}
                            onClick={() => handleAcceptBook(item?._id)}
                            className="btn btn-error btn-sm">
                            accept
                          </button>
                        </>
                      )}
                    </div>
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

export default AssignedTours;
