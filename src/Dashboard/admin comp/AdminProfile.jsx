import React from "react";
import useAuth from "../../hooks/useAuth";
import Title from "../../shared components/Title";

function AdminProfile(props) {
    const {user} = useAuth()
  return (
    <div>
      <div className="flex md:flex-row items-center justify-center gap-5">
        <div className="md:w-1/2 border">
          <img src={user?.photoURL} className="w-full h-[150px] md:h-[250px]" />
        </div>
        <Title
          subHeading={"profile of"}
          heading={user?.displayName}
          description={" "}></Title>
      </div>

      <div>
        
        <p className="my-10">
        Welcome to the Admin Dashboard! As the administrator of our vibrant travel platform, you wield the power to curate and manage an immersive experience for travel enthusiasts exploring the beauty of Bangladesh.

Your role encompasses a myriad of responsibilities, from overseeing the creation and publication of captivating travel packages to moderating engaging stories shared by travelers. Through this dashboard, you can effortlessly manage user accounts, edit tour guide details, and monitor the performance of various sections on our website.

Feel the pulse of every traveler's journey by seamlessly updating and refining the content displayed, ensuring that each user's experience is nothing short of exceptional. Embrace this platform to inspire, inform, and connect travelers with the enchanting wonders that Bangladesh has to offer.

Explore the tools at your disposal and wield them to craft a delightful exploration experience for everyone venturing through our digital doors.
        </p>
      </div>
    </div>
  );
}

export default AdminProfile;
