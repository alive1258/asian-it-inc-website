"use client";
import { BiSolidQuoteRight } from "react-icons/bi";
import Image from "next/image";
import { TiStar } from "react-icons/ti";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  const rating = testimonial?.rating || 0;
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
        className="md:flex items-center gap-10 md:mr-5"
      >
        <div className="w-full md:h-full bg-gradient-to-b from-[#CCCFFF] to-[#cccfff3a] rounded-lg p-4">
          <Image
            className="md:h-40 h-32"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${testimonial?.photo}`}
            width={140}
            height={168}
            alt="testimonial"
          />
          <h1 className="text-black-base font-semibold pt-3 text-nowrap">
            {testimonial?.name}
          </h1>
          <p className="text-xs pt-1 text-nowrap uppercase">
            {" "}
            {testimonial?.title}
          </p>
        </div>
        <div>
          <div className="bg-no-repeat pb-3.5  relative capitalize text-primary-base text-xl font-semibold ">
            <span className="text-primary-base capitalize">” </span>
            {testimonial?.product?.name}
            <span className="text-primary-base "> ” </span>
          </div>
          <div className="relative">
            <p className="text-sm italic text-black-base my-4 z-20 pr-3">
              {testimonial?.comment}
            </p>
            {/* <BiSolidQuoteRight /> */}
            <div className="absolute top-[16%] left-[31%] text-[#DCC8E6] text-9xl -z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="122"
                height="87"
                viewBox="0 0 122 87"
                fill="none"
              >
                <g opacity="0.2">
                  <path
                    d="M108.853 4.99609V43.529C108.853 62.1284 94.2177 77.3739 75.885 78.3649V69.9036C89.5678 68.9127 100.392 57.4405 100.392 43.529C100.392 42.4618 99.5536 41.6233 98.4864 41.6233H72.2261V4.99609H108.853ZM51.721 4.99609V43.529C51.721 62.1284 37.0853 77.3739 18.7145 78.3649V69.9036C32.4355 68.9127 43.2597 57.4405 43.2597 43.529C43.2597 42.4618 42.4212 41.6233 41.354 41.6233H15.0938V4.99609H51.721Z"
                    fill="#5A5FF9"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, index) => (
              <TiStar key={index} className={`text-2xl text-[#FFC107]`} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonialCard;
