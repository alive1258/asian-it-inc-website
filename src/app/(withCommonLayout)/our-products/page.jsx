import Image from "next/image";
import aboutBanner from "../../../../public/assets/images/aboutBanner.png";
import OurProducts from "@/components/UI/Home/OurProducts/OurProducts";
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
        <OurProducts />
        <Brands />
        <Testimonials />
        <FaqHome />
      </div>
    </>
  );
};

export default page;
