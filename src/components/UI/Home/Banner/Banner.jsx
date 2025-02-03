import Link from "next/link";
import React from "react";

import Button from "../../Button/Button";
import Image from "next/image";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

import { FaStar } from "react-icons/fa";
import OurTechnology from "./OurTechnology";

const Banner = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const resTechnologies = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/technologies`
  );

  if (!resTechnologies.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const technologiesData = await resTechnologies.json();
  const bannersData = data?.data || [];
  return (
    <>
      <div className="bg-[url('/assets/images/bannerbg.png')] bg-cover bg-center bg-no-repeat  pb-[72px] md:pt-14 pt-4">
        <div className="md:pt-32 pt-28 md:flex items-center ">
          <div className="container  relative md:flex  justify-between gap-8 md:gap-[71px]">
            <div>
              <div className=" space-5">
                <h2 className=" text-[#DEDEDE]  text-base md:text-lg  capitalize">
                  {bannersData.name}
                </h2>
                <h1
                  className="text-[25px] md:text-[35px] lg:text-[54px] leading-normal font-semibold"
                  style={{
                    background:
                      "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    // textShadow: "1px 3px 0px #69089A",
                    webkitTextStrokeWidth: "1",
                    // boxShadow: "1px 3px 0px 0px #69089A",
                  }}
                >
                  {bannersData.title}
                </h1>
                <p className="pt-6 text-sm md:text-base text-[#DEDEDE]">
                  {bannersData.description}
                </p>
              </div>
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
            <div className="md:pt-0 pt-20 md:pl-0 pl-7">
              <OurTechnology ourTechnologies={technologiesData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
