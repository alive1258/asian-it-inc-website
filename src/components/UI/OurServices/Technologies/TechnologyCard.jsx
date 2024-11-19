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
        <div className="">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg "
              src={item?.image}
              height={60}
              width={60}
              alt="JavascriptImg"
            />
          </div>
          <p className="pt-3 text-center text-xl">{item?.name}</p>
        </div>
      </motion.div>
    </>
  );
};

export default TechnologyCard;
