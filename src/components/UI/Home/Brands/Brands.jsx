import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

const Brands = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const brandsData = data?.data || [];
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
                Trusted by {brandsData?.length} + Brands
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
