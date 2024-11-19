"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

const Brands = () => {
  return (
    <>
      <div>
        <div className="absolute z-[0] w-[180px] flex-shrink-0 h-[180px] bg-[#75FF03]  opacity-40 blur-[150px]" />
        <div className="absolute z-[0] w-[180px] flex-shrink-0 h-[180px] top-0 -left-[200px] bg-[#FFC903]  opacity-40 blur-[150px]" />
        <div className="absolute z-[0] w-[180px]  h-[180px] top-0 rounded-[330px]  right-0 bg-[#FF0303]  opacity-70 blur-[150px]" />
        <div className="container relative overflow-hidden">
          <div className="flex justify-center py-14 ">
            <div
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <h1 className="text-[40px] font-semibold text-center">
                Trusted by 100+ Brands
              </h1>
            </div>
          </div>

          <div>
            <div className="py-12">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="right"
              >
                {/* {clients?.data?.map((client, index) => (
              <ClientBox client={client} key={index} />
            ))} */}
                <div className="size-[100px] p-2 my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
                  <Image
                    className="flex w-full h-full"
                    src={asianItIncLogo}
                    width={200}
                    height={200}
                    alt="client_image"
                  />
                  <div className="size-[100px]  my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
                    <Image
                      src={asianItIncLogo}
                      width={145}
                      height={48}
                      alt="client icon"
                    />
                  </div>
                </div>
              </Marquee>

              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {/* {clients?.data?.map((client, index) => (
              <ClientBox client={client} key={index} />
            ))} */}
                <div className="size-[100px] p-2  my-2.5   border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
                  <Image
                    className="flex w-full h-full"
                    src={asianItIncLogo}
                    width={200}
                    height={200}
                    alt="client_image"
                  />
                  <div className="size-[100px]  my-2.5   border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
                    <Image
                      src={asianItIncLogo}
                      width={145}
                      height={48}
                      alt="client icon"
                    />
                  </div>
                </div>
              </Marquee>

              <div>
                <Marquee
                  gradient={false}
                  speed={80}
                  pauseOnHover={true}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="right"
                >
                  {/* {clients?.data?.map((client, index) => (
              <ClientBox client={client} key={index} />
            ))} */}
                  <div className="size-[100px] p-2 my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
                    <Image
                      className="flex w-full h-full"
                      src={asianItIncLogo}
                      width={200}
                      height={200}
                      alt="client_image"
                    />
                    <div className="size-[100px]  my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
                      <Image
                        src={asianItIncLogo}
                        width={145}
                        height={48}
                        alt="client icon"
                      />
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
