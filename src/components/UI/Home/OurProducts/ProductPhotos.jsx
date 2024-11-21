import Image from "next/image";
import React from "react";

const ProductPhotos = ({ photos }) => {
  const photosData = photos.split(",");
  console.log(photosData)

  return (
    <div>
      <div>
        {photosData?.map((item, index) => (
          <Image
            key={index}
            className="max-h-[966px]  w-full object-fill overflow-hidden"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item}`}
            width={1000}
            layout="responsive"
            height={500}
            alt="blog"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
