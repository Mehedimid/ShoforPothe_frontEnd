import React, { useState } from "react";
import Title from "../../shared components/Title";
import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "../../shared components/Loading";

function ManageUsers(props) {
  const [users, isPending, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(users);


  const [status, setStatus] = useState("user");

  const handleMakeAdmin = (item) => {
    axiosSecure.patch(`/users/admin/${item?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item?.name} saved as an Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
        setAdminDis(true);
        setGuideDis(true);
        refetch()
      }
    });
  };

  const handleMakeGuide = (item) => {
    axiosSecure.patch(`/users/guide/${item?._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item?.name} saved as a Guide`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()

      }
    });
  };

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="my-5">
        <Title
          subHeading={"users detail"}
          heading={"Manage all users"}
          description={" "}></Title>
      </div>

      <div>
        <h1 className="text-3xl font-semibold">Total User: {users?.length}</h1>
      </div>

      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white bg-purple-400 font-semibold text-xl">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
         
              </tr>
            </thead>
            <tbody>
              {users?.map((item, idx) => (
                <tr key={item?._id} className="py-3  text-lg font-medium">
                  <th>{idx + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>
                  <p className="text-center">
                      {item?.role ? (
                        item?.role
                      ) : (
                        <button
                          onClick={() => handleMakeGuide(item)}
                          className="btn ">
                          make guide
                        </button>
                      )}
                    </p>
                  </td>

                 

                  <td>
                    <p className="text-center">
                      {item?.role ? (
                        item?.role
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(item)}
                          className="btn ">
                          make admin
                        </button>
                      )}
                    </p>
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

export default ManageUsers;
