import React from "react";
import TogglePlanType from "./TogglePlanType";
import MyPlanSort from "./MyPlanSort";

const ToggleAndSort = () => {
  return (
    <section className="container mx-auto bg-global-background pt-16 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 w-full">
        <TogglePlanType />
        <MyPlanSort />
      </div>
    </section>
  );
};

export default ToggleAndSort;
