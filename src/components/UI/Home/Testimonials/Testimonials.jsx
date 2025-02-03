import SwiperTestimonial from "./SwiperTestimonial";
import TitleSection from "../titleSection/TitleSection";

const Testimonials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonial`);

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
            name={"TESTIMONIALS"}
            description={`Our clients trust Asian IT Inc. for delivering high-quality, custom software and website solutions that drive real business results. They praise our professionalism, technical expertise, and commitment to exceeding expectations`}
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
