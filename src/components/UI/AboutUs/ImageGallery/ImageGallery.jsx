"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageGallery = ({ photos = "" }) => {
  const photoNewData = photos?.split(",").filter(Boolean); // Ensure valid images

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{ once: false }}
      className="container my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {photoNewData.slice(0, 4).map((gallery, index) => (
        <motion.div
          key={index} // Using index since `gallery` is a string (URL)
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
          className={`rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-500 ${
            index % 2 !== 0 ? "md:mt-20" : "" // Alternating margin
          }`}
        >
          <Image
            className="h-full w-full object-cover"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${gallery}`}
            width={305}
            height={420}
            alt="Gallery image"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageGallery;
