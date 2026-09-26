import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner.png";
import BannerButton from "./BannerButton";
const Banner = () => {
  return (
    <div className="container mx-auto bg-global-background py-6 sm:py-10 px-4 sm:px-6 md:px-8">
      <section className="flex lg:flex-row flex-col justify-between items-center gap-10 lg:gap-30 px-6 sm:px-10 py-12 lg:py-14 bg-hero-background border-2 border-hero-background rounded-xl">
        <div className="flex flex-col justify-between items-start space-y-6 sm:space-y-8 w-full lg:w-auto">
          <div>
            <p className="uppercase text-button-primary font-semibold text-sm sm:text-base">{`WORKOUT LIBRARY`}</p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase text-white font-bold">
              {`TRAIN WITH INTENT. LOG `}
              <br className="hidden sm:inline" />
              {`EVERY SET.`}
            </h1>
          </div>
          <div>
            <p className="text-global-subtitle text-sm sm:text-base max-w-lg">
              {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock `}
              <br className="hidden sm:inline" />
              {`it into today's plan, and watch the week's work add up.`}
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <BannerButton />
          </div>
        </div>
        <div className="w-full max-w-75 sm:max-w-90 lg:max-w-100 aspect-square relative">
          <Image
            src={bannerImage}
            alt="banner image"
            className="object-cover object-center rounded-2xl w-full h-full"
            height={400}
            width={400}
            loading="eager"
          ></Image>
        </div>
      </section>
    </div>
  );
};

export default Banner;
