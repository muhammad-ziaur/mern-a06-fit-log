import React from "react";
import FooterLogo from "./FooterLogo";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 border-t border-hero-background bg-global-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
        <FooterLogo />
        <div className="text-global-subtitle text-xs sm:text-sm flex justify-center sm:justify-between items-center gap-1">
          <span>
            <FaRegCopyright />
          </span>
          <p>{`2026 FitLog — Workout Library. Train hard, log honest.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
