
import DevelopmentTeam from "@/components/UI/OurServices/DevelopmentTeam/DevelopmentTeam";
import Industries from "@/components/UI/OurServices/Industries/Industries";
import Technologies from "@/components/UI/OurServices/Technologies/Technologies";
import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";

const page = () => {
  return (
    <>
      <div>
       <HeroBanners/> 
    
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
