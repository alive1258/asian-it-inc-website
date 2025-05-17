"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServicesImage = ({ aboutData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
    >
      <Image
        className="rounded-lg"
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${aboutData?.service_photo}`}
        width={629}
        height={476}
        alt="union"
      />
    </motion.div>
  );
};

export default ServicesImage;
