import React from "react";
import SectionCover from "../shared components/SectionCover";
import Title from "../shared components/Title";
import SectionTitle from "../shared components/SectionTitle";

function Contact(props) {
  return (
    <div>

<div className="hidden lg:block">
        <SectionCover
          img="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=ais"
          shadowText={"contact us"}
          heading={"contact US"}></SectionCover>
      </div>

      <div className="lg:hidden mt-20">
        <Title subHeading={"contact us"} heading={"contact us "}></Title>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <SectionTitle>Contact Us now!</SectionTitle>
            <p className="py-6">
              <p className="text-center">
                Have questions, suggestions, or just want to say hello? We'd
                love to hear from you! Our dedicated team at{" "}
                <span className="font-bold my-text-color">shoforPothe</span> is
                here to assist you on your journey through Bangladesh. Whether
                you need travel advice, assistance with bookings, or want to
                collaborate with us, feel free to reach out. Your feedback is
                invaluable to us as we strive to make your experience with us
                seamless and memorable. Connect with us today and let's make
                your exploration of Bangladesh an adventure to remember.
              </p>
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input border-b-4 border-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input  border-b-4 border-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <textarea
                  rows="5"
                  cols="10"
                  placeholder="message"
                  className="border rounded-lg border-b-4 border-black p-3"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn-grad">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


