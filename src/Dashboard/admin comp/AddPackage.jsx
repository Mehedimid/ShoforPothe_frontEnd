import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Title from "../../shared components/Title";
import useGallary from "../../hooks/useGallary";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function AddPackage(props) {
  const { user } = useAuth();
  const [gallary] = useGallary();
  const [selectedType, setSelectedType] = useState("");
  const axiosSecure = useAxiosSecure()

  const handleGuideChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const tripTitle = form.title.value;
    const price = parseInt(form.price.value);
    const place = form.place.value;
    const day1Title = form.day1D.value;
    const day2Title = form.title2.value;
    const day1D = form.day1D.value;
    const day2D = form.day2D.value;

    const obj = {
      image,
      tripTitle,
      price,
      type: selectedType,
      place,

      tourPlan :[
        {
            day:1 ,
            planTitle: day1Title,
            planDetails: day1D
        },
        {
            day:2 ,
            planTitle: day2Title,
            planDetails: day2D
        },
      ]


    };
    // console.log(obj);

    axiosSecure.post('/packages', obj) 
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire("package added!");
            form.reset()
        }
    })


  };

  return (
    <>
      <div>
        <Title
          subHeading={`admin: ${user?.displayName}`}
          heading={"add a package"}
          description={" "}></Title>
      </div>

      <div className="my-10">
        <div className="border w-9/12 mx-auto  bg-red-100 min-h-[200px] mt-12 md:px-16 py-5">
          {/* ====form ===*/}
          <form onSubmit={handleAdd} className="shadow-xl space-y-6 ">
            {/* trip title */}
            <div className="  space-y-3 ">
              <div className="">
                <h2 className="text-lg  text-slate-700">trip Title:</h2>
                <input
                  type="text"
                  required
                  placeholder=" trip Title"
                  name="title" //---
                  className="border p-2  w-full border-red-600 rounded"
                />
              </div>

              {/* trip image  */}
              <div className="">
                <h2 className="text-lg  text-slate-700">trip image :</h2>
                <input
                  required
                  type="text"
                  placeholder="type url"
                  name="photo" //----
                  className="border p-2  w-full border-red-600 rounded"
                />
              </div>

              {/* price field  */}
              <div className="">
                <h2 className="text-lg  text-slate-700">Price:</h2>
                <input
                  type="number"
                  required
                  placeholder="add price"
                  name="price" //------
                  className="border p-2  w-full border-red-600 rounded"
                />
              </div>

              {/* place field  */}
              <div className="">
                <h2 className="text-lg  text-slate-700">Place:</h2>
                <input
                  type="text"
                  required
                  placeholder="place"
                  name="place" //------
                  className="border p-2  w-full border-red-600 rounded"
                />
              </div>

              {/* tour plan  */}
              <div>
                <h2 className="text-lg  text-slate-700">
                  tour plan(min:2days):
                </h2>
                <input
                  type="text"
                  className="border p-2  w-full border-red-600 rounded"
                  placeholder="title"
                  name="title1"
                  required
                />
                <input
                  type="text"
                  className="border p-2  w-full border-red-600 rounded"
                  placeholder="title"
                  name="title2"
                  required
                />
                                <input
                  type="text"
                  className="border p-2  w-full border-red-600 rounded"
                  placeholder="planDetails day1"
                  name="day1D"
                  required
                />
                <input
                  type="text"
                  className="border p-2  w-full border-red-600 rounded"
                  placeholder="planDetails day2"
                  name="day2D"
                  required
                />

              </div>
            </div>

            {/* type field  */}
            <div>
              <h2 className="text-lg  text-slate-700">Chose trip type</h2>
              <select
                className="select border p-2  border-red-600 rounded w-full text-lg  text-slate-700"
                required
                onChange={handleGuideChange}
                value={selectedType}>
                <option disabled value="">
                  Select Type
                </option>
                {gallary?.map((item) => (
                  <option key={item._id} value={item?.type}>
                    {item?.type}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-grad w-full">
              Add package
            </button>
          </form>
          {!user && (
            <button onClick={handleGOLogin} className="mt-5 btn-grad w-full">
              Book Now
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default AddPackage;

// {
//     "_id": "6565076348ec75c0d0c72772",
//     "image": "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?size=626&ext=jpg&uid=R109449898&ga=GA1.1.1656165048.1699715121&semt=sph",
//     "type": "wildlife",
//     "tripTitle": "Mangrove Safari Experience Sundarban",
//     "price": 22,
//     "category": "popular",
//     "place": "Khulna",
//     "tourPlan": [
//     {
//     "day": 1,
//     "planTitle": "Embark on a boat safari through mangrove forests. Explore wildlife habitat.",
//     "planDetails": "The Mangrove Safari Experience in Sundarban invites you to embark on an unforgettable boat safari through the enchanting mangrove forests, a habitat teeming with diverse wildlife. Day one sets the tone for an immersive journey into the heart of this unique ecosystem. The boat safari navigates through narrow waterways, offering glimpses of elusive wildlife hidden within the lush greenery."
//     },
//     {
//     "day": 2,
//     "planTitle": "Discover diverse flora and fauna. Visit birdwatching hotspots.",
//     "planDetails": "Day two unveils the richness of Sundarban's biodiversity. Explore the diverse flora and fauna inhabiting this ecological wonderland. Venture into birdwatching hotspots where avian melodies fill the air, and the vibrant plumage of exotic birds paints a picturesque scene against the backdrop of green foliage. Every moment here is a testament to the harmony of nature."
//     },
//     {
//     "day": 3,
//     "planTitle": "Morning creek exploration. Return journey by boat.",
//     "planDetails": "As the expedition nears its conclusion, day three begins with a tranquil morning creek exploration, offering a final glimpse into the serene beauty of Sundarban. The return journey by boat is a reflective time, allowing for contemplation of the myriad experiences and encounters with nature's wonders, leaving an indelible mark on your memory."
//     }
//     ]
//     },
