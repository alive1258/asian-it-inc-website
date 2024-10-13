import Link from "next/link";
import React from "react";

import Button from "../../Button/Button";
import Image from "next/image";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/assets/images/bannerbg.png')] bg-cover bg-center bg-no-repeat h-screen">
        <div className="md:pt-32 pt-28 md:flex items-center ">
          <div className="container  relative md:flex  justify-between md:gap-10">
            <div>
              <h1
                className="text-[54px] font-semibold"
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Custom Software Development Company
              </h1>
              <p className="pt-6 text-[#fff]">
                With over 8 years of experience, ASIAN IT INC. specializes in
                custom software development for clients worldwide. From the US
                to Europe and Asia, we deliver exceptional custom software
                development solutions to empower small and medium-sized
                enterprises with tailored digital solutions.
              </p>
              <div className="pt-20 flex items-center space-x-6">
                <div>
                  <Link href="/case studies">
                    <button className="outline-btn">Case Studies</button>
                  </Link>
                </div>
                <div>
                  <Link href="/contact-us">
                    <Button content="Contact Us" />
                  </Link>
                </div>
              </div>
              <div className="pt-16">
                <div className="flex -space-x-3">
                  <Image
                    className="md:size-12 border-[#7579FA] border-2  size-9 rounded-full"
                    src={asianItIncLogo}
                    height={28}
                    width={151}
                    alt="logo"
                  />
                  <Image
                    className="md:size-12 border-[#7579FA] border-2  size-9 rounded-full"
                    src={asianItIncLogo}
                    height={28}
                    width={151}
                    alt="logo"
                  />
                  <Image
                    className="md:size-12 border-[#7579FA] border-2  size-9 rounded-full"
                    src={asianItIncLogo}
                    height={28}
                    width={151}
                    alt="logo"
                  />
                  <div className="md:size-12 size-9  rounded-full bg-[#3137F8] flex justify-center items-center text-[#fff]">
                    1k+
                  </div>
                </div>

                <div className="pt-4 w-52">
                  <p className="text-lg text-[#fff]">
                    Avg rating 4.9 makes us world’s best agency.
                  </p>
                  <div className="pt-2 flex items-center space-x-2">
                    <FaStar className="text-2xl text-[#FFB200]" />
                    <FaStar className="text-2xl text-[#FFB200]" />
                    <FaStar className="text-2xl text-[#FFB200]" />
                    <FaStar className="text-2xl text-[#FFB200]" />
                    <FaStar className="text-2xl text-[#FFB200]" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#fff]">
                With over 8 years of experience, ASIAN IT INC. specializes in
                custom software development for clients worldwide. From the US
                to Europe and Asia, we deliver exceptional custom software
                development solutions to empower small and medium-sized
                enterprises with tailored digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
