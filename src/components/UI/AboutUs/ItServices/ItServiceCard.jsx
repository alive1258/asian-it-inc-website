import Image from "next/image";
import React from "react";

const ItServiceCard = ({ aboutData }) => {
  return (
    <div className="w-full">
      <h1 className="text-white md:text-[40px] text-[22px] font-semibold md:pb-6 pb-3">
        {aboutData?.title}
      </h1>
      <p className="text-gray-base md:text-lg text-[14px] font-light">
        {aboutData?.details}
      </p>
      <div className="grid md:text-xl text-lg font-medium md:grid-cols-2 grid-cols-1 gap-x-14 md:gap-y-10 gap-y-4 md:my-10 my-6">
        <div className=" bg-[#777BFA] text-white rounded-lg p-4 flex items-center gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${aboutData?.worldwide_services_photo}`}
            width={40}
            height={40}
            alt="icon"
          />
          <h6 className="text-sm md:text-base">
            {aboutData?.worldwide_services}
          </h6>
        </div>
        <div className=" bg-[#777BFA] text-white rounded-lg p-4 flex items-center gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${aboutData?.support_photo}`}
            width={40}
            height={40}
            alt="icon"
          />
          <h6 className="text-sm md:text-base">{aboutData?.support}</h6>
        </div>
        <div className=" bg-[#777BFA] text-white rounded-lg p-4 flex items-center gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${aboutData?.easy_to_reach_photo}`}
            width={40}
            height={40}
            alt="icon"
          />
          <h6 className="text-sm md:text-base">{aboutData?.easy_to_reach}</h6>
        </div>
        <div className=" bg-[#777BFA] text-white rounded-lg p-4 flex items-center gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${aboutData?.first_on_field_photo}`}
            width={40}
            height={40}
            alt="icon"
          />
          <h6 className="text-sm md:text-base">{aboutData?.first_on_field}</h6>
        </div>
      </div>
    </div>
  );
};

export default ItServiceCard;
