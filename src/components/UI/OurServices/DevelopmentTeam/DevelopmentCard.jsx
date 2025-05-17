"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const DevelopmentCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} // Starts zoomed in
      whileInView={{
        opacity: 1,

        scale: 1, // Zooms out
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
    >
      <div className="md:space-y-8 space-y-5">
        <Image
          className="md:w-[80px] w-[50px] h-[50px] md:h-[80px] mx-auto"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
          height={80}
          width={80}
          alt="logo"
        />
        <p className="text-sm md:text-base text-center text-white">
          {item.name}
        </p>
      </div>
    </motion.div>
  );
};

export default DevelopmentCard;
