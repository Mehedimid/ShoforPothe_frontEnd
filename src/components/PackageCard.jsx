import { FaClock, FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

function PackageCard({ item }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { image, type, tripTitle, price, _id, place, tourPlan } = item;
  // const [wishColor, setWishColor] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleWishlist = () => {
    const info = {
      email: user?.email,
      packageInfo: {
        image,
        type,
        tripTitle,
        price,
        packageId: _id,
        place,
        tourPlan,
      },
    };

    if (user) {
      axiosPublic.post("/wishlist", info).then((res) => {
        // console.log(res.data.message)
        if (res.data?.insertedId) {
          Swal.fire({
            title: "thank you!",
            text: "Package Added To Your Wishlist",
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        } else {
          toast.error(res.data.message);
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="card shadow shadow-base-content hover:shadow-md hover:shadow-base-content transition-all duration-300 rounded-md text-gray-800 bg-base-300">
        <div className=" card">
          {/* ------- image div of card --------- */}
          <div className="relative ">
            <img
              src={image}
              className="object-cover object-center w-full rounded-t-md h-40 "
            />

            <div className=" font-semibold bg-[#DF826C] w-fit p-1 absolute top-1 left-1 text-sm">
              {price}$/person
            </div>

            <button
              onClick={handleWishlist}
              className={` text1 text-2xl font-semibold w-fit p-1  absolute right-0 top-0`}>
              <FaBookmark></FaBookmark>
            </button>
          </div>

          {/* --------------- info div of card -------------- */}
          <div className="flex flex-col card-body justify-between text-center ">
            <div className="">
              <h2 className="md:text-xl font-semibold capitalize">{tripTitle}</h2>

              <p className="font-medium my-2 text-gray-700">
                Tour Type :{" "}
                <span className="font-bold capitalize text-sm ">{type}</span>{" "}
              </p>

              <div className="my-2">
                <Link
                  to={`/packages/${_id}`}
                  className="all-btn w-10/12 mx-auto text-sm font-bold ">
                  View Package
                </Link>
              </div>
            </div>

            <div className="flex justify-around text-red-600 font-medium">
              <div>
                <FaLocationDot className="inline text-slate-600"></FaLocationDot>{" "}
                {place}{" "}
              </div>
              <div>
                <FaClock className="inline text-slate-600"></FaClock>{" "}
                {tourPlan.length}days{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
