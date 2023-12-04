import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../shared components/Title";

function AssignedTours(props) {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [status, setStatus] = useState("Pending");

  const {
    refetch,
    isPending,
    data: bookings = [],
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookings");
      return res.data;
    },
  });

  const guideBookings = bookings?.filter(
    (item) => item?.guideEmail == user?.email
  );

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
                      <span className="font-bold">{item?.touristName}</span> <br />
                      <small>{item?.touristEmail}</small>
                    </p>
                  </td>

                  <td>
                    <div className="flex items-center justify-center gap-1 my-auto">
                      {item?.status ? (
                        item?.status
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
