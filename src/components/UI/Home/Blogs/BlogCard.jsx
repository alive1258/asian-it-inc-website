"use client";
import Image from "next/image";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import moment from "moment";
import { truncateCharacters } from "@/utils/descriptionTextCounter";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <>
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
        className=" group bg-[#E4E5FE] shadow cursor-pointer hover:shadow-custom-10px hover:bg-[#F6F0FF]  rounded-lg delay-150 duration-300 transition-all"
      >
        <div className="md:h-[250px]">
          <Image
            className="rounded-t-lg h-full  object-fill "
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blog?.photo}`}
            width={413}
            height={300}
            alt="blog"
          />
        </div>
        <div className="p-5 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-black-base text-sm">
              {moment(blog?.createdAt).format("DD MMMM - YYYY")}
            </span>
            <span className="w-2.5 h-2.5 bg-green-base rounded-full"></span>
            <h6 className="font-medium text-primary-base text-sm">
              {blog?.blogCategory?.name}
            </h6>
          </div>
          <h1 className="text-black-base  group-hover:text-primary-base hover:text-[#bb4988] text-xl font-semibold capitalize">
            {truncateCharacters(blog?.name, 55)}
          </h1>
          <p className="text-black-base text-sm">
            {truncateCharacters(blog?.sort_description, 150)}
          </p>
          <button className="font-semibold text-[#4b4f56] hover:text-primary-base hover:border-b hover:border-b-primary-base duration-200">
            <Link
              className="flex items-center gap-1 group-hover:text-primary-base text-sm md:text-base"
              href={`/blogs/${blog?.slug}`}
            >
              {" "}
              <TiPlus />
              <span>Read More </span>
            </Link>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default BlogCard;
