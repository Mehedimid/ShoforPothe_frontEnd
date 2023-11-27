import React from "react";
import Title from "../../shared components/Title";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Overview from "../../components/Overview";

function TourismSection(props) {
  return (
    <>
      <div>
        <Title
          subHeading={"Enjoy Trip"}
          heading={"Tourism and Travel Guide"}></Title>
      </div>

      <section className="mt-12">
        <Tabs>
          <TabList className="flex text-xs md:text-lg font-medium justify-center md:gap-10">
            <Tab>Overview</Tab>
            <Tab>Popular Packages</Tab>
            <Tab>Our Guides</Tab>
          </TabList>

          <TabPanel>
          <Overview></Overview>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
}

export default TourismSection;
