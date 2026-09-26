import React from "react";

const LibraryTitle = () => {
  return (
    <div
      className="scroll-mt-25 flex flex-col justify-start items-start space-y-0 mt-10"
      id="libraryTitleComponent"
    >
      <h2 className="text-3xl text-global-text font-semibold uppercase">
        THE LIBRARY
      </h2>
      <p className=" text-global-subtitle">
        Twelve lifts covering every major muscle group.
      </p>
    </div>
  );
};

export default LibraryTitle;
