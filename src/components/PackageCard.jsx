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
      <div className=" shadow-xl">
        <div className="rounded-md bg-black text-white ">
          {/* ------- image div of card --------- */}
          <div className="relative">
            <img
              src={image}
              className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
            />

            <div className=" font-semibold bg-red-600 w-fit p-1 text-white absolute top-0">
              {price}$/person
            </div>

            <button
              onClick={handleWishlist}
              className={` text-red-600 text-3xl font-semibold w-fit p-1  absolute right-0 top-0`}>
              <FaBookmark></FaBookmark>
            </button>
          </div>

          {/* --------------- info div of card -------------- */}
          <div className="flex flex-col  justify-between p-6 text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl uppercase text-gray-200  font-semibold">
                {tripTitle}
              </h2>

              <p className="font-medium text-gray-400 pb-2">
                Tour Type :{" "}
                <span className="font-bold uppercase text-sm">{type}</span>{" "}
              </p>

              <Link
                to={`/packages/${_id}`}
                className="btn-grad btn-grad:hover w-10/12 mx-auto text-sm font-bold">
                view package
              </Link>
            </div>

            <div className="flex justify-between text-red-600 font-medium">
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
