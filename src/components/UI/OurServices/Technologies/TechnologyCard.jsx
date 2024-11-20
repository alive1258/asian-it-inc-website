"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const TechnologyCard = ({ item }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: false }}
        className="skillsBg"
      >
        <div className=" bg-[#EFEFFE] h-[140px] w-[142px] border border-[#CCCDFD] rounded-lg ">
          <div className="p-4">
            <Image
              className="rounded-lg mx-auto w-[50px] h-[50px] "
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
              height={48}
              width={48}
              alt={item?.name}
            />
          </div>
          <p className="text-center capitalize text-lg">{item?.name}</p>
        </div>
      </motion.div>
    </>
  );
};

export default TechnologyCard;
