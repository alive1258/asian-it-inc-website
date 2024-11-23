import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductHeader = ({ productData }) => {
  return (
    <div className=" text-black  pb-[72px] pt-24 space-y-8">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        <div className="space-y-5 lg:col-span-2  md:space-y-10">
          <div>
            <span className="inline-block px-7 capitalize py-[6px] text-sm font-medium text-[#6065FA] bg-[#E4E5FE] rounded-full">
              {productData?.category}{" "}
            </span>
          </div>

          {/* <!-- Title --> */}
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
            {productData?.big_title}
          </h1>

          {/* <!-- Buttons --> */}
          <div className="flex space-x-4">
            <Link
              href="#"
              className="px-6 py-3 border border-black hover:border-primary-base text-black font-medium rounded-full hover:bg-primary-base hover:text-white transition"
            >
              See Demo
            </Link>
            <a
              href="#"
              className="px-6 py-3 bg-primary-base text-white font-medium rounded-full hover:border-primary-base transition"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="space-y-5 lg:col-span-1 md:space-y-8">
          {/* <!-- Info Section --> */}
          <div className="space-y-2">
            <h3 className="font-semibold capitalize text-lg md:text-[32px]">
              {productData?.name}
            </h3>
            <p className="text-[#1E232C] text-sm md:text-base">
              {productData?.title}
            </p>
          </div>
          <div className="grid sm:grid-cols-2  gap-6 text-black">
            {productData?.web && (
              <div className="space-y-2">
                <h3 className="font-semibold capitalize text-lg md:text-[25px]">
                  Web Version
                </h3>
                <p className="text-[#1E232C] text-sm md:text-base">work Scope</p>
              </div>
            )}

            {productData?.app && (
              <div className="space-y-2">
                <h3 className="font-semibold capitalize text-lg md:text-[25px]">
                  Mobile App
                </h3>
                <p className="text-[#1E232C] text-sm md:text-base">work Scope</p>
              </div>
            )}
          </div>

          {/* <!-- Technology Section --> */}
          <div>
            <h3 className=" font-light text-lg md:text-[25px] text-[#1E232C]">
              Technology
            </h3>
            <div className="flex space-x-4 mt-4">
              {productData?.assignedTechnologyData?.map((item, index) => (
                <div key={index} className=" w-[50px] h-[50px]">
                  <Image
                    className="rounded  h-full w-full  object-contain"
                    layout="responsive"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.technologies?.photo}`}
                    width={50}
                    height={50}
                    alt="blog"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
