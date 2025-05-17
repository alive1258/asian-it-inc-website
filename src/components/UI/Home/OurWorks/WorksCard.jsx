"use client";
import { truncateText } from "@/utils/descriptionTextCounter";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WorksCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,

        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        } items-center gap-6 md:gap-10 xl:gap-[56px] text-gray-base`}
      >
        {/* Text Content Section */}
        <div className="space-y-4 w-full md:w-[50%]">
          {/* Category Button */}
          <button className="py-2 px-4 rounded-full text-white bg-tertiary-base text-sm md:text-[16px] md:font-medium">
            {item?.category || "Category"}
          </button>

          {/* Title */}
          <h1 className="text-white text-xl md:text-[40px] md:leading-[48px] font-semibold capitalize">
            {item?.name || "Work Name"}
          </h1>

          {/* Description */}
          <p className=" text-gray-base text-sm md:text-base">
            {truncateText(item?.description || "", 18)}
          </p>
          <div className="text-[18px] hover:text-[#4e53d1] text-[#5A5FF9] border-b w-fit border-[#5A5FF9]">
            <Link href={`/our-works/${item?.id}`}>
              <p>Check Full Case Study</p>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] max-h-[400px] overflow-hidden rounded-[30px] relative">
          <Image
            className="w-full hover:scale-110 hover:rotate-3 duration-300 overflow-hidden ease-in-out transition-all object-cover h-full "
            width={400}
            height={700}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
            alt={item?.name || "Work Image"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WorksCard;
