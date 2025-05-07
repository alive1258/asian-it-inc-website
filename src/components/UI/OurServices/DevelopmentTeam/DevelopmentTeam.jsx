import Image from "next/image";
import React from "react";
import DevelopmentCard from "./DevelopmentCard";

const DevelopmentTeam = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/capabilities`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const capabilities = data?.data || [];

  return (
    <>
      <div className="relative overflow-hidden">
        {" "}
        {/* Added relative positioning */}
        {/* Blurred Background */}
        <div
          className="absolute rounded-full  blur-[200px] bg-[#5A5FF9]"
          style={{
            width: "1077.908px",
            height: "1077.908px",
            left: "153.111px",
            top: "-826.95px",
            opacity: "0.34",
          }}
        ></div>
        <div className="container py-16 relative z-10">
          <h1 className="text-[25px] md:text-[40px] flex justify-center text-[#fff]">
            Our Development Team Capabilities
          </h1>
          <div className="pt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-12 gap-7">
            {capabilities?.map((item) => (
              <DevelopmentCard key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentTeam;
