import React from "react";
import FooterLogo from "./FooterLogo";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 border-t border-hero-background bg-global-background">
      <div className="container mx-auto flex justify-between items-center">
        <FooterLogo />
        <div className="text-global-subtitle text-sm flex justify-between items-center gap-1">
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
