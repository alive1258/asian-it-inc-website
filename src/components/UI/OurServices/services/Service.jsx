"use client";
import { useGetServiceDataQuery } from "@/redux/api/homeApi";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const { data } = useGetServiceDataQuery();
  const [activeService, setActiveService] = useState(1);

  return (
    <>
      <div className="bg-[#040408]">
        <div className="bg-[url('/assets/images/industryBg.png')] bg-cover bg-no-repeat">
          <div className=" container mx-auto py-8">
            <div className=" grid  grid-cols-1 lg:grid-cols-2 md:gap-10">
              <div>
                <h4
                  className="text-[20px] font-semibold leading-normal "
                  style={{
                    background:
                      "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Services
                </h4>
                <h1 className="text-[35px] md:text-[60px] leading-normal font-semibold text-white">
                  We Help your business grow
                </h1>
                <p className="text-base md:text-lg text-gray-base">
                  {`We're the tech experts behind innovative digital and technology solutions that will make your brand stand out! Let us be your guides in achieving your boldest business objectives.`}
                </p>
              </div>
              <div>
                <div>
                  {data?.data?.map((item, index) => (
                    <ServiceCard
                      activeService={activeService}
                      setActiveService={setActiveService}
                      key={index}
                      index={index}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
