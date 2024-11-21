import Image from "next/image";
import React from "react";

const ProductPhotos = ({ photos }) => {
  const photosData = photos.split(",");
  console.log(photosData);
  console.log(photosData?.[2], "photosData?.[2]");

  return (
    <div>
      <div className=" space-y-4">
        <div className=" grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          <div className=" lg:col-span-2  rounded-[32px]  md:h-[436px] overflow-hidden">
            <Image
              className="max-h-[436px] rounded-[32px] w-full object-fill overflow-hidden"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photosData?.[0]}`}
              width={1000}
              height={500}
              alt="blog"
            />
          </div>
          <div className=" lg:col-span-1  h-full  md:h-[436px] rounded-[32px]  overflow-hidden">
            <Image
              className="rounded-[32px] w-full h-full  overflow-hidden"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photosData?.[1]}`}
              width={1000}
              height={500}
              alt="blog"
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photosData?.[2] && (
            <div className=" lg:col-span-1  h-full  md:h-[436px] rounded-[32px]  overflow-hidden">
              <Image
                className="rounded-[32px] w-full h-full  overflow-hidden"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photosData?.[2]}`}
                width={1000}
                height={500}
                alt="blog"
              />
            </div>
          )}

          {photosData?.[3] && (
            <div className=" lg:col-span-2  rounded-[32px]  md:h-[436px] overflow-hidden">
              <Image
                className="max-h-[436px] rounded-[32px] w-full object-fill overflow-hidden"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${photosData?.[3]}`}
                width={1000}
                height={500}
                alt="blog"
              />
            </div>
          )}
        </div>
      </div>
      <div className=" pt-[48px] space-y-5">
        {photosData?.slice(4)?.map((item, index) => (
          <div key={index} className="  overflow-hidden">
            <Image
              className=" w-full object-contain overflow-hidden"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item}`}
              width={1000}
              height={500}
              layout="responsive"
              alt="blog"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
