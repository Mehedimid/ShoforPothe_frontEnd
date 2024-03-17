import React from "react";
import SectionCover from "../shared components/SectionCover";
import Swal from "sweetalert2";

function Contact(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Your message has been sent!");
    e.target.reset();
  }

  return (
    <div>
      <div>
        <SectionCover
          img="https://img.freepik.com/free-photo/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter_335224-427.jpg?size=626&ext=jpg&ga=GA1.1.1656165048.1699715121&semt=sph"
          shadowText={"contact us"}
          heading={"Contact Us"}></SectionCover>
      </div>

      <div>
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="section-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
