import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function TourPlan({ pack }) {
  // console.log(pack?.tourPlan);
  return (
    <>
      <section className="">
        <Tabs>
          <TabList className="flex text-xs md:text-lg font-medium justify-center md:gap-10">
            {pack?.tourPlan.map((plan, idx) => (
              <Tab key={idx}>day{plan.day}-plan</Tab>
            ))}
          </TabList>

          {pack?.tourPlan.map((plan, idx) => (
            <TabPanel key={idx}>
              <div className="text-2xl bg-orange-100 py-5">
                <p className="text-center text-2xl font-semibold">{plan.planTitle}</p>
                <p className="text-base my-2">{plan.planDetails}</p>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </>
  );
}

export default TourPlan;
