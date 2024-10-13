"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

const Brands = () => {
  return (
    <>
      <div>
        {/* <div className="bg-[linear-gradient(to_right,_#6366f1_2%,_#0ea5e9_25%,_#ef4444_45%,_#facc15_70%,_#10b981_95%)]" > */}
        {/* <div className="bg-gradient-to-r from-indigo-500 from-2% via-sky-500 via-25% via-red-500 via-25% via-yellow-500 via-45% to-emerald-500 to-95%"> */}
        <div className="container">
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
