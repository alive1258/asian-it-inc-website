import Image from "next/image";
import React from "react";
import ProductHeader from "./ProductHeader";
import ProductPhotos from "./ProductPhotos";

const ProductsDetailsSection = ({ productData }) => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-[#f6f8fc] to-[#eff6f6]">
          <div className=" container  mx-auto">
            <ProductHeader productData={productData} />
          </div>
        </div>
        <div>
          {/* big  banner  */}
          <div>
            <Image
              className="max-h-[966px]  w-full object-fill overflow-hidden"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${productData?.photo}`}
              width={1000}
              layout="responsive"
              height={500}
              alt="blog"
            />
          </div>

          {/* overview  */}
          <div className=" container mx-auto py-[60px]">
            <div className=" space-y-5 md:space-y-10">
              <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10  md:gap-[100px]">
                <div className=" lg:col-span-1">
                  <h1 className="text-3xl md:text-5xl capitalize font-semibold text-black-base">
                    Project Overview
                  </h1>
                </div>
                <div className=" lg:col-span-2">
                  <p className="text-lg text-gray-700">
                    {productData?.overview}
                  </p>
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10  md:gap-[100px]">
                <div className=" lg:col-span-1">
                  <h1 className="text-3xl md:text-5xl capitalize font-semibold text-black-base">
                    Problem{" "}
                  </h1>
                </div>
                <div className=" lg:col-span-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData?.problems,
                    }}
                  ></div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10  md:gap-[100px]">
                <div className=" lg:col-span-1">
                  <h1 className="text-3xl md:text-5xl capitalize font-semibold text-black-base">
                    Challenge
                  </h1>
                </div>
                <div className=" lg:col-span-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData?.challenge,
                    }}
                  ></div>
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10  md:gap-[100px]">
                <div className=" lg:col-span-1">
                  <h1 className="text-3xl md:text-5xl capitalize font-semibold text-black-base">
                    Solutions
                  </h1>
                </div>
                <div className=" lg:col-span-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData?.solutions,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <ProductPhotos photos={productData?.photos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsSection;
