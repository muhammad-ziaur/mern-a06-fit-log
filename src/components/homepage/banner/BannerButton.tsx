"use client";
import React from "react";

const BannerButton = () => {
  const scrollDownToLibraryTitleComponent = () => {
    const targetComponent = document.getElementById("libraryTitleComponent");
    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      className="cursor-pointer text-details-button-one bg-button-primary font-semibold rounded-xl px-6 py-3"
      onClick={scrollDownToLibraryTitleComponent}
    >
      <p className="uppercase font-bold">
        <span>{`BROWSE WORKOUTS`}</span>
      </p>
    </button>
  );
};

export default BannerButton;
