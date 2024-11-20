import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import OurWorks from "@/components/UI/Home/OurWorks/OurWorks";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";

const page = () => {
  return (
    <>
      <div>
      <HeroBanners />
        <OurWorks />
        <Brands />
        <Testimonials />
        <FaqHome />
      </div>
    </>
  );
};

export default page;
