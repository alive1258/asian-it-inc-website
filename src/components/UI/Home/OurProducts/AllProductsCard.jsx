"use client";
import Image from "next/image";
import React from "react";
import ProductHoverEffect from "./ProductHoverEffect";
import { motion } from "framer-motion";

const AllProductsCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Starts lower
      whileInView={{
        opacity: 1,
        y: 0, // Moves up
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
    >
      <div className="relative group overflow-hidden rounded-lg">
        <Image
          className="w-full h-[296px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
          height={296}
          width={413}
          alt="product"
        />
        <ProductHoverEffect item={item} />
      </div>
    </motion.div>
  );
};

export default AllProductsCard;
