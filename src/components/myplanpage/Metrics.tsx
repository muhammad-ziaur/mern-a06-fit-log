import React from "react";

const Metrics = () => {
  return (
    <section className="rounded-2xl border border-global-subtitle bg-hero-background py-8 px-4 flex justify-between items-center">
      <div className="flex flex-col flex-1 justify-between pl-6">
        <p className=" text-global-subtitle">Exercises</p>
        <h2 className="text-3xl text-button-primary font-bold uppercase">0</h2>
      </div>
      <div className="flex flex-col flex-1 justify-between pl-6 border-l border-global-subtitle">
        <p className=" text-global-subtitle">Minutes</p>
        <h2 className="text-3xl text-global-text font-bold uppercase">0</h2>
      </div>
      <div className="flex flex-col flex-1 justify-between pl-6 border-l border-global-subtitle">
        <p className=" text-global-subtitle">Calories</p>
        <h2 className="text-3xl text-global-text font-bold uppercase">0</h2>
      </div>
    </section>
  );
};

export default Metrics;
