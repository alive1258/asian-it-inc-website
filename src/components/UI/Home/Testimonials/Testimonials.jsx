import React from "react";
// import SwiperTestimonial from "./SwiperTestimonial";

const Testimonials = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center pt-14 ">
          <div>
            <p className="text-[20px] pt-2 font-normal text-center">
              TESTIMONIALS
            </p>
            <h1
              className="text-[40px] font-semibold text-center"
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What clients say
            </h1>
            <p className="text-[20px] pt-2 font-normal text-center w-[490px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore.
            </p>
          </div>
        </div>

        <div className="mt-10">
          {/* <SwiperTestimonial testimonials={testimonials} /> */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
