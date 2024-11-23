import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import OurWorks from "@/components/UI/Home/OurWorks/OurWorks";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
export async function generateMetadata() {
  return {
    title: `Our works | Asian it inc`,
    description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
  };
}
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
