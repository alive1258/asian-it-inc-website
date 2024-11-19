import Image from "next/image";
import aboutBanner from "../../../../public/assets/images/aboutBanner.png";
import DevelopmentTeam from "@/components/UI/OurServices/DevelopmentTeam/DevelopmentTeam";
import Industries from "@/components/UI/OurServices/Industries/Industries";
import Technologies from "@/components/UI/OurServices/Technologies/Technologies";
import Brands from "@/components/UI/Home/Brands/Brands";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";

const page = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={aboutBanner}
          height={350}
          width={900}
          alt="aboutBanner"
        />
        <DevelopmentTeam />
        <Industries />
        <Technologies />
        <Brands />
        <Testimonials />
        <FaqHome />
      </div>
    </>
  );
};

export default page;
