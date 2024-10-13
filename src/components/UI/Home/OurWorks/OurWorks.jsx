import Link from "next/link";
import React from "react";
import Button from "../../Button/Button";

const OurWorks = () => {
  return (
    <>
      <div className="bg-[#000] py-16">
        <div className="container">
          <div className="text-white">
            <div>
              <p
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" text-[20px] font-semibold "
              >
                Our Works
              </p>
              <h1 className="text-[40px] pt-2 font-normal ">Case studies</h1>
              <p className="text-[20px] pt-2 font-normal  w-[490px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 pt-16">
            <div className="lg:col-span-3 bg-red-400 text-white">pic</div>
            <div className="lg:col-span-2 bg-blue-500 text-white">pic</div>
          </div>
          <div className="pt-16 w-44 mx-auto">
            <Link href="/all-cases">
              <Button content="See all Cases" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
