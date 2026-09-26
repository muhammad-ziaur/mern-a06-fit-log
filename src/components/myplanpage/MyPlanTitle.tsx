import React from "react";

const MyPlanTitle = () => {
  return (
    <div className="flex flex-col justify-start items-start space-y-0 mt-12 mb-9 px-4 sm:px-6 md:px-8 container mx-auto">
      <h2 className="text-2xl sm:text-3xl text-global-text font-bold uppercase">
        MY PLAN
      </h2>
      <p className="text-global-subtitle text-sm sm:text-base">
        Cap of five lifts for today. Finish them, then load more.
      </p>
    </div>
  );
};

export default MyPlanTitle;
