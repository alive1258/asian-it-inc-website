import OurProducts from "@/components/UI/Home/OurProducts/OurProducts";
import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import ProductBanner from "@/components/UI/Home/OurProducts/ProductBanner";

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
        <ProductBanner />
        <OurProducts />
        <Brands />
        <Testimonials />
        <FaqHome />
      </div>
    </>
  );
};

export default page;
