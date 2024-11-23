import DevelopmentTeam from "@/components/UI/OurServices/DevelopmentTeam/DevelopmentTeam";
import Industries from "@/components/UI/OurServices/Industries/Industries";
import Technologies from "@/components/UI/OurServices/Technologies/Technologies";
import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
import Service from "@/components/UI/OurServices/services/Service";
export async function generateMetadata() {
  return {
    title: `Our Services | Asian it inc`,
    description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
  };
}

const page = () => {
  return (
    <>
      <div>
        <HeroBanners />
        <Service />
        <div className="bg-gradient-to-r from-black to-gray-900">
          <div className="bg-[url('/assets/images/industryBg.png')] bg-cover bg-no-repeat">
            <DevelopmentTeam />
            <Industries />
          </div>
        </div>
        <Technologies />
        <Brands />
        <Testimonials />
        <FaqHome />
      </div>
    </>
  );
};

export default page;
