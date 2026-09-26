import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner.png";
import BannerButton from "./BannerButton";
const Banner = () => {
  return (
    <div className="container mx-auto bg-global-background py-10">
      <section className="flex justify-between items-center gap-6 px-10 py-14 bg-hero-background border-2 border-hero-background rounded-xl">
        <div className="flex flex-col justify-between items-start space-y-8">
          <div className="whitespace-nowrap">
            <p className="uppercase text-button-primary font-semibold">{`WORKOUT LIBRARY`}</p>
          </div>
          <div className="whitespace-nowrap">
            <h1 className="text-5xl uppercase text-white font-bold">
              {`TRAIN WITH INTENT. LOG `}
              <br />
              {`EVERY SET.`}
            </h1>
          </div>
          <div className="whitespace-nowrap">
            <p className="text-global-subtitle">
              {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock `}
              <br />
              {`it into today's plan, and watch the week's work add up.`}
            </p>
          </div>
          <div>
            <BannerButton />
          </div>
        </div>
        <div className="max-w-full aspect-square">
          <Image
            src={bannerImage}
            alt="banner image"
            className="object-cover object-center"
            height={400}
            width={400}
          ></Image>
        </div>
      </section>
    </div>
  );
};

export default Banner;
