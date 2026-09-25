import React from "react";
import TogglePlanType from "./TogglePlanType";

const ToggleAndSort = () => {
  return (
    <section className="container mx-auto bg-global-background pt-16">
      <div className="flex justify-between items-center">
        <TogglePlanType />
        <p className="text-white">Dummy SORT</p>
      </div>
    </section>
  );
};

export default ToggleAndSort;
