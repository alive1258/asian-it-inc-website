import Image from "next/image";
import React from "react";

const WorkDetails = ({ worksData }) => {
  console.log(worksData, "worksData");
  return (
    <div className="">
      <div className="">
        <Image
          className="max-h-[480px] w-full object-fill"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${worksData?.photo}`}
          width={1280}
          height={600}
          alt="blog details"
        />
      </div>
      <div className="container  py-[56px]">
        {/* Blog Image Section */}
        <button className=" bg-[#A0A3FC]  px-6 py-2 text-white rounded-full">
          {" "}
          {worksData?.blogCategory?.name}{" "}
        </button>
        {/* Blog Content */}
        <div className="mt-[32px]">
          <h1 className="text-[20px] font-semibold ">{worksData?.name}</h1>
          <div className="mt-5">
            <div
              dangerouslySetInnerHTML={{ __html: worksData?.description }}
            ></div>
          </div>
        </div>

        {/* Related Blogs Section */}
      </div>
    </div>
  );
};

export default WorkDetails;
