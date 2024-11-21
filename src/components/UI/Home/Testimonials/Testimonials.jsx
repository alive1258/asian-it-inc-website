import React from "react";
import SwiperTestimonial from "./SwiperTestimonial";
import TitleSection from "../titleSection/TitleSection";
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
      <div className="container mx-auto">
        <div className="pt-14">
          <TitleSection
            color={true}
            name={"FAQS"}
            description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore.`}
            title={"  What clients say"}
          />
        </div>
        <div className="py-10">
          <SwiperTestimonial testimonials={testimonialsData} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
