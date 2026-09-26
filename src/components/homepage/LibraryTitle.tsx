import React from "react";

const LibraryTitle = () => {
  return (
    <div
      className="scroll-mt-25 flex flex-col justify-start items-start space-y-0 mt-10 px-4 sm:px-6 md:px-8 container mx-auto"
      id="libraryTitleComponent"
    >
      <h2 className="text-2xl sm:text-3xl text-global-text font-semibold uppercase">
        THE LIBRARY
      </h2>
      <p className="text-global-subtitle text-sm sm:text-base">
        Twelve lifts covering every major muscle group.
      </p>
    </div>
  );
};

export default LibraryTitle;
