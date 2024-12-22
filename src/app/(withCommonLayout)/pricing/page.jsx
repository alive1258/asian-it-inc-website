import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import Contact from "@/components/UI/Home/Contact/Contact";
import ProductPrice from "@/components/UI/ProductPrice/ProductPrice";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";

export async function generateMetadata() {
  return {
    title: `Pricing | Asian it inc`,
    description:
      "Asian It Inc provides custom web and mobile app solutions for businesses.",
  };
}

const page = () => {
  return (
    <>
      <div>
        <HeroBanners />
        <ProductPrice />
        <Testimonials />
        <FaqHome />
        <Contact />
      </div>
    </>
  );
};

export default page;
