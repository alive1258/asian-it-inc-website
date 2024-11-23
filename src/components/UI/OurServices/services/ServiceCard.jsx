import { truncateText } from "@/utils/descriptionTextCounter";
import Image from "next/image";
import React from "react";
import { Collapse } from "react-collapse";

const ServiceCard = ({ setActiveService, activeService, index, item }) => {
  return (
    <div className="text-white">
      <div className="bg-black text-white border-b border-[#323438] py-8 md:p-8 space-y-8">
        <div className="flex items-start space-x-6">
          <div className="relative w-[51px] h-[58px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="58"
              viewBox="0 0 51 58"
              fill="none"
            >
              <path
                d="M49.5037 36.4425C44.7617 51.9183 30.1708 61.1317 16.9139 57.0213C3.65709 52.9109 -3.2456 37.0332 1.49635 21.5575C6.2383 6.08174 20.8292 -3.1317 34.0861 0.978686C47.3429 5.08907 54.2456 20.9668 49.5037 36.4425Z"
                fill="#7579FA"
              />
            </svg>
            <p className=" absolute top-1 text-[24px] font-medium flex justify-center items-center w-full h-full">
              {index + 1 >= 10 ? "" : "0"}
              {index + 1}.{" "}
            </p>
          </div>
          <div className=" w-full">
            <div
              onClick={() => setActiveService(index)}
              className="flex items-start justify-between w-full cursor-pointer gap-2"
            >
              <h3 className=" text-[25px] capitalize md:text-[32px] font-semibold">
                {item?.name}
              </h3>
              {activeService !== index && (
                <Image
                  width={100}
                  height={100}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
                  alt="Service Thumbnail"
                  className="w-[71px] h-[54px] rounded  object-fill"
                />
              )}
            </div>
            <Collapse isOpened={activeService == index}>
              <div className="mt-3">
                <div className="flex items-start justify-between gap-[32px]">
                  <div>
                    <p className="text-sm text-gray-base">
                     {truncateText(item?.description,15)}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center mt-2 text-[#6D71FA] underline"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.33333 15.0003L13.3333 7.00033V14.167H15V4.16699H5V5.83366H12.1667L4.16667 13.8337L5.33333 15.0003Z"
                          fill="#6D71FA"
                        />
                      </svg>
                    </a>
                  </div>
                  <Image
                    width={250}
                    height={250}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
                    alt="Service Thumbnail"
                    className="w-[134px] h-[102px] rounded-lg object-fill"
                  />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
