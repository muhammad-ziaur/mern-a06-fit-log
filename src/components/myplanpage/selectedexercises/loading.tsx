import React from "react";

const WorkoutsLoading = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center mt-20 mb-36 gap-6 bg-global-background">
      <div className="w-12 h-12 border-4 border-hero-background border-t-button-primary rounded-full animate-spin"></div>
      <p className="text-white text-xl sm:text-2xl font-bold uppercase">
        WORKOUTS LOADING...
      </p>
    </div>
  );
};

export default WorkoutsLoading;
