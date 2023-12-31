import React, { useEffect, useState } from "react";
import SectionCover from "../shared components/SectionCover";
import axios from "axios";
import "./blog.css"

function Blog(props) {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    axios.get("blog.json").then((res) => setBlogs(res.data));
  }, []);
  console.log(blogs);

  return (
    <>
      <div>
        {/* <SectionCover
          img="https://img.freepik.com/free-photo/woman-holiday-journey-travel-relaxation_53876-42668.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=ais"
          heading={"Explore Our Blogs Here "}></SectionCover> */}
      </div>

      <div className="my-24 sizing">
        {blogs?.map((item, idx) => (
          // <div key={idx} className="flex flex-col md:flex-row mb-5 bg-[#D0F288] shadow-xl rounded-xl">
          //   {/* image        */}
          //   <div className="shadow-xl shadow-orange-100  md:w-1/3">
          //     <img src={item.image} className="w-full h-full lg:object-cover rounded-xl" />
          //   </div>

          //   {/* content  */}
          //   <div className="  bg-[#8ADAB2] text-white md:w-1/3 text-center space-y-3 p-3">
          //     <p className=" text-2xl">{item.title}</p>
          //     <p className="font-medium">
          //       tour type: <span className="">{item.type}</span>
          //     </p>

          //     <div className="flex ">
          //       <p className="w-1/2"> <span className="text-xl font-bold">Advantages: <br /> </span>{item.advantages}</p>

          //       <p className="w-1/2"><span className="text-xl font-bold">Experience: <br /> </span>{item.experience}</p>
          //     </div>

          //   </div>

          //   {/* description  */}
          //   <div className="  md:w-1/3 text-xl font-bold p-3">Details: <br />
          //   <span className="text-base font-medium">{item.description}</span>
          //   </div>
          // </div>
          <div className="h-12 my-5">
            <h1>hello mam</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
