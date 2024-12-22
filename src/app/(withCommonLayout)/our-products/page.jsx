import OurProducts from "@/components/UI/Home/OurProducts/OurProducts";
import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";

export async function generateMetadata() {
  return {
    title: `Our Products | Asian it inc`,
    description:
      "Asian It Inc provides custom web and mobile app solutions for businesses.",
  };
}

const page = () => {
  return (
    <>
      <div>
        <HeroBanners />
        <OurProducts />
        <Brands />
        <Testimonials />
        <FaqHome />
      </div>
    </>
  );
};

export default page;
