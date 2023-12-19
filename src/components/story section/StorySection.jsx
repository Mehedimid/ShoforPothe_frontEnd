import React from "react";
import useStories from "../../hooks/useStories";
import Title from "../../shared components/Title";
import StoryCard from "./StoryCard";
import { Link } from "react-router-dom";
import Loading from "../../shared components/Loading";

function StorySection(props) {
  const [stories, isPending] = useStories();

  if (isPending) {
    return <Loading></Loading>;
  }

  return (
    <>
      <section className="mb-24 p-3">
        <div>
          <Title
            heading={"Our Recent Stories"}
            subHeading={"Latest Blog"}></Title>
        </div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {stories?.length &&
            stories
              ?.slice(0, 3)
              .map((item) => (
                <StoryCard key={item._id} item={item}></StoryCard>
              ))}
        </div>

        <div className="my-7 flex justify-center">
          <Link to="/all-stories" className="border md:w-1/3 text-center section-btn font-bold">
            See All Stories
          </Link>
        </div>
      </section>
    </>
  );
}
// hvr-sweep-to-right
export default StorySection;
