import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

const Brands = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const brandsData = data?.data || [];
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="absolute rounded-full opacity-40 blur-[150px] bg-[#952fe9]"
          style={{
            width: "593.727px",
            height: "531.226px",
            right: "0px",
            top: "-365.17px",
          }}
        ></div>
        {/* Blurred Effect - Blue Circle */}
        <div
          className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA]"
          style={{
            width: "699.729px",
            height: "626.07px",
            left: "152.271px",
            bottom: "-477.762px",
          }}
        ></div>
        <div className="container  ">
          <div className="flex justify-center md:py-14 py-5">
            <div
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <h1 className="md:text-[40px] text-[30px] font-semibold text-center">
                Trusted by {brandsData?.length} + Brands
              </h1>
            </div>
          </div>

          <div>
            <div className="md:py-12 py-5">
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
                <div className="size-[100px] p-2 my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center gap-10">
                  {brandsData?.map((item, index) => (
                    <Image
                      key={index}
                      className="flex w-full h-full"
                      layout="responsive"
                      src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                      width={150}
                      height={150}
                      alt="client_image"
                    />
                  ))}
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
                <div className="size-[100px] p-2 my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center gap-10">
                  {brandsData?.map((item, index) => (
                    <Image
                      key={index}
                      layout="responsive"
                      className="flex w-full h-full"
                      src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                      width={150}
                      height={150}
                      alt="client_image"
                    />
                  ))}
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
                  <div className="size-[100px] p-2 my-2.5  border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center gap-10">
                    {brandsData?.map((item, index) => (
                      <Image
                        key={index}
                        layout="responsive"
                        className="flex w-full h-full"
                        src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                        width={100}
                        height={100}
                        alt="client_image"
                      />
                    ))}
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
