import React from "react";
import TogglePlanType from "./TogglePlanType";
import MyPlanSort from "./MyPlanSort";

const ToggleAndSort = () => {
  return (
    <section className="container mx-auto bg-global-background pt-16">
      <div className="flex justify-between items-center">
        <TogglePlanType />
        <MyPlanSort />
      </div>
    </section>
  );
};

export default ToggleAndSort;
