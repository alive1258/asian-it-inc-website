import React from "react";
import SwiperTestimonial from "./SwiperTestimonial";
// import SwiperTestimonial from "./SwiperTestimonial";

const Testimonials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const testimonialsData = data?.data || [];
  return (
    <div className="bg-[#F8F3FF]">
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

        <div className="py-10">
          <SwiperTestimonial testimonials={testimonialsData} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
