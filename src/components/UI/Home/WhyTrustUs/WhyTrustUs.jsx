import Image from "next/image";
import React from "react";
import TrustUsCard from "./TrustUsCard";
const WhyTrustUs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/why-trust-us`);

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
                Core Mind Soft SO DIFFERENT?
              </p>
              <h1 className="md:text-[40px] text-[30px] font-semibold text-center">
                Why Trust Us?
              </h1>
            </div>
          </div>

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8  md:py-12 py-6">
            {whyTrustUsData?.map((item, index) => (
              <TrustUsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTrustUs;
