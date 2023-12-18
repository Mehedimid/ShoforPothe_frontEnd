import React from "react";
import Title from "../../shared components/Title";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Overview from "../../components/Overview";
import PopularPackages from "../../components/PopularPackages";
import MeetGuide from "../../components/MeetGuide";

function TourismSection(props) {
  return (
    <>
      <div>
        <Title
          subHeading={"Enjoy Trip"}
          heading={"Most Popular Tours"}
          description={" "}>
          </Title>
      </div>

      <section className="mt-12">
        <Tabs>
          <TabList className="flex text-xs text-center font-semibold md:uppercase md:text-lg  justify-center md:gap-10">
            <Tab>Overview</Tab>
            <Tab>Popular Packages</Tab>
            <Tab>Our Guides</Tab>
          </TabList>

          <TabPanel>
          <Overview></Overview>
          </TabPanel>

          <TabPanel>
            <PopularPackages></PopularPackages>
          </TabPanel>

          <TabPanel>
            <MeetGuide></MeetGuide>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

export default TourismSection;
