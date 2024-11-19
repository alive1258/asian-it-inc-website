import Image from "next/image";
import React from "react";
import aboutBanner from "../../../../public/assets/images/aboutBanner.png";
import litonPic from "../../../../public/assets/images/liton.png";
const Team = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 overflow-hidden">
      <div className="absolute z-[0] w-[593.727px] h-[531.226px] bg-[#EEFF07] rounded-[593.727px] -top-[345.17px] left-0 opacity-40 blur-[175px]" />
      <div className="absolute z-[0] w-[699.729px] h-[626.07px] bg-[#D207FF] rounded-[699.729px] -bottom-[377.762px] right-0 opacity-40 blur-[175px]" />

      <div className="container py-16">
        <h1 className="text-[40px]  text-[#fff]">
          Our Development Team Capabilities
        </h1>
        <p className="text-[20px]  text-[#fff]">
          We have a nice Family with Expert, Happy and Cheerful People
        </p>
        <div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <div className="">
              <Image
                className="h-[440px] w-[340px]"
                src={litonPic}
                height={250}
                width={250}
                alt="logo"
              />
              <div className="pt-8">
                <h2 className="text-[32px] font-medium text-white">
                  Md. Liton Hossain{" "}
                </h2>
                <p className="text-[24px] font-medium text-[#A3A3A3]">
                  CEO & Founder{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
