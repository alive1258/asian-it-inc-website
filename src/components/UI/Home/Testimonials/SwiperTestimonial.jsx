"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";

const SwiperTestimonial = ({ testimonials }) => {
  return (
    <>
      <div>
        {/* Testimonials  */}
        <div className=" w-full">
          <div className="flex space-x-4 mb-4 md:justify-between justify-end relative md:top-[17vh] z-[500] pr-7 md:pt-0 pt-6">
            <div className="custom-prev-button ">
              <IoIosArrowBack className="text-white hover:bg-[#A26AFF] bg-[#BFC1FD] rounded-full md:size-10 size-8 p-1 cursor-pointer z-[500] duration-300" />
            </div>
            <div className="custom-next-button">
              <IoIosArrowForward className="text-white hover:bg-[#A26AFF] bg-[#BFC1FD] rounded-full md:size-10 size-8 p-1 cursor-pointer z-[500] duration-300" />
            </div>
          </div>
          <div className=" md:px-14">
            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination, Navigation, Scrollbar, A11y]}
              className="mySwiper"
            >
              {/* testimonial 1 */}
              {testimonials?.map((testimonial,index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperTestimonial;
