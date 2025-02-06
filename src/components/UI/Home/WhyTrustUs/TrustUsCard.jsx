"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const TrustUsCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} // Starts hidden and zoomed out
      whileInView={{
        opacity: 1,
        scale: 1, // Zooms out
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 md:py-4 py-2"
    >
      <Image
        className="md:w-[88px] w-[58px] md:h-[88px] h-[58px]"
        src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
        width={88}
        height={88}
        alt="icon"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-white md:text-2xl text-lg capitalize font-semibold">
          {item?.name}
        </h1>
        <p className="text-white pr-5 md:text-[18px] text-[15px]">
          {item?.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TrustUsCard;
