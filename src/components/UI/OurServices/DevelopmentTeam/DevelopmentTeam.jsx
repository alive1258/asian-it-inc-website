import Image from "next/image";
import React from "react";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

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
      <div className="">
        <div className="container py-16">
          <h1 className="text-[25px]  md:text-[40px] flex justify-center text-[#fff]">
            Our Development Team Capabilities
          </h1>
          <div className="pt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-12 gap-7">
            {capabilities?.map((item) => (
              <div key={item.id}>
                <div className="md:space-y-8 space-y-5">
                  <Image
                    className=" md:w-[80px] w-[50px] h-[50px] md:h-[80px] mx-auto "
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
                    height={80}
                    width={80}
                    alt="logo"
                  />
                  <p className=" text-sm md:text-base text-center text-white">
                    {item.name}
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

export default DevelopmentTeam;
