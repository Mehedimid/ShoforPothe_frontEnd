function TourPlan({ pack }) {
  // console.log(pack?.tourPlan);
  return (
    <>
      <section className="">

        {pack?.tourPlan?.map((plan, idx) => (
          <div key={idx}>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl text-black font-medium capitalize">
              day{plan.day}: <span className="text-base text-gray-800"> {plan.planTitle}</span>
              </div>
              <div className="collapse-content">
                <p className="text-gray-700 text-sm italic">{plan.planDetails}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default TourPlan;
