import React from "react";
import aboutBanner from "../../../../public/assets/images/aboutBanner.png";
import Image from "next/image";
import Team from "@/components/UI/Team/team";

const page = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={aboutBanner}
          height={350}
          width={900}
          alt="aboutBanner"
        />
        <Team />
      </div>
    </>
  );
};

export default page;
