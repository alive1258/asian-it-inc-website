import Image from "next/image";
import React from "react";
import trustIcon from "../../../../../public/assets/images/trust.png";

const WhyTrustUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-900 ">
        <div className="bg-[url('/assets/images/trustUsBg.png')] bg-cover bg-no-repeat py-16">
          <div className="flex justify-center pt-14 ">
            <div
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <p className="text-[20px] text-center pt-2 font-normal">
                ASIAN IT INC SO DIFFERENT?
              </p>
              <h1 className="text-[40px] font-semibold text-center">
                Why Trust Us?
              </h1>
            </div>
          </div>

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8  md:py-12 pt-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
              <Image src={trustIcon} width={88} height={88} alt="icon" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-white pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
              <Image src={trustIcon} width={88} height={88} alt="icon" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-white pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
              <Image src={trustIcon} width={88} height={88} alt="icon" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-white pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
              <Image src={trustIcon} width={88} height={88} alt="icon" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-white pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
              <Image src={trustIcon} width={88} height={88} alt="icon" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-white pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
              <Image src={trustIcon} width={88} height={88} alt="icon" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl font-semibold">
                  Protect your Business
                </h1>
                <p className="text-white pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrustUs;
