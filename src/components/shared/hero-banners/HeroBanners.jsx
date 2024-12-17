"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { useGetSinglePageHereBannerDataQuery } from "@/redux/api/homeApi";
const HeroBanners = () => {
  const pathname = usePathname();
  const { data } = useGetSinglePageHereBannerDataQuery(pathname);
  return (
    <div>
      <Image
        className="w-full md:h-[350px] h-[170px]"
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.data?.photo}`}
        height={350}
        width={900}
        alt="hero"
      />
    </div>
  );
};

export default HeroBanners;
