import Image from "next/image";
import React from "react";
const WhyTrustUs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/why-trust-us`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const whyTrustUsData = data?.data || [];

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-900 ">
        <div className="bg-[url('/assets/images/trustUsBg.png')] bg-cover bg-no-repeat md:py-16 py-4">
          <div className="flex justify-center pt-14">
            <div
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <p className="md:text-[20px]  text-[18px] text-center pt-2 font-normal">
                ASIAN IT INC SO DIFFERENT?
              </p>
              <h1 className="md:text-[40px] text-[30px] font-semibold text-center">
                Why Trust Us?
              </h1>
            </div>
          </div>

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8  md:py-12 py-6">
            {whyTrustUsData?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 md:py-4 py-2"
              >
                <Image
                  className="md:w-[88px] w-[58px] md:h-[88px] h-[58px]"
                  src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                  width={88}
                  height={88}
                  alt="icon"
                />
                <div className="flex flex-col gap-4">
                  <h1 className="text-white md:text-2xl text-lg capitalize font-semibold">
                    {item?.name}
                  </h1>
                  <p className="text-white pr-5 md:text-[18px] text-[15px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrustUs;
