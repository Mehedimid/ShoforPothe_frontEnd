import React from "react";
import useWishlist from "../../hooks/useWishlist";
import Loading from "../../shared components/Loading";
import { Link, useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Title from "../../shared components/Title";

function Wishlist(props) {
  const { email } = useParams();
  const [wishlist, isPending, refetch] = useWishlist();
  const myWishlist = wishlist?.filter((item) => item.email == email);
  const axiosPublic = useAxiosPublic();

  const handleDeleteitem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "puple",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/wishlist/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
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
          subHeading={"wish more"}
          heading={"My Wish list"}
          description={" "}></Title>
      </div>

      <div className="bg-red-100">
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white bg-orange-400 font-semibold text-xl">
                <th>#</th>
                <th>Image</th>
                <th>Tour Details</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myWishlist?.map((item, idx) => (
                <tr
                  key={item._id}
                  className="py-3 border-b-2 border-red-600 text-lg font-medium">
                  <th>{idx + 1}</th>
                  <td>
                    <img src={item?.packageInfo?.image} className="w-52" />
                  </td>
                  <td>
                    <div>
                      <p>{item.packageInfo.tripTitle}</p>
                      <p className="text-red-600 italic my-3">
                        {item.packageInfo.price}$/person
                      </p>
                      <Link to={`/packages/${item?.packageInfo?.packageId}`}>
                        <button className="text-sm btn-grad">
                          View details
                        </button>
                      </Link>
                    </div>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDeleteitem(item._id)}
                      className="btn bg-red-500">
                      <FaTrash className="text-white  text-xl"></FaTrash>
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

export default Wishlist;
