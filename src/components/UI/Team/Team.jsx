import { truncateCharacters } from "@/utils/descriptionTextCounter";
import Image from "next/image";
import React from "react";
const Team = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-teams`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const ourTeamData = data?.data || [];
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-900 overflow-hidden">
      <div className="absolute z-[0] w-[593.727px] h-[531.226px] bg-[#EEFF07] rounded-[593.727px] -top-[345.17px] left-0 opacity-40 blur-[175px]" />
      <div className="absolute z-[0] w-[699.729px] h-[626.07px] bg-[#D207FF] rounded-[699.729px] -bottom-[377.762px] right-0 opacity-40 blur-[175px]" />

      <div className="container py-16">
        <h1 className=" text-[26px] md:text-[32px]  text-[#6D71FA]">Our awesome team</h1>
        <p className="text-[30px] md:text-[48px] text-[#fff] mt-5">
          We have a nice Family with Expert, Happy and Cheerful People{" "}
        </p>
        <div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {ourTeamData?.map((item) => (
            <div key={item?.id}>
              <div className="">
                <Image
                  className="h-[440px] w-[340px] rounded-lg overflow-hidden"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
                  height={250}
                  width={250}
                  alt="logo"
                />
                <div className="pt-8">
                  <h2 className=" text-[25px] md:text-[32px] capitalize font-medium text-white">
                    { truncateCharacters(item.name,20) }
                  </h2>
                  <p className=" text-[20px] md:text-[24px] capitalize font-medium text-[#A3A3A3]">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
