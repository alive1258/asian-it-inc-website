// import ImageGallery from "@/components/UI/AboutUs/ImageGallery/ImageGallery";
// import ItServices from "@/components/UI/AboutUs/ItServices/ItServices";
import AboutHome from "@/components/UI/Home/AboutHome/AboutHome";
import Image from "next/image";
import aboutBanner from "../../../../public/assets/images/aboutBanner.png";
// import Contact from "@/components/UI/Home/Contact/Contact";
// import Brands from "@/components/UI/Home/Brands/Brands";
// import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
// import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";

const page = () => {
  return (
    <>
      <div>
        <div>
          <Image
            className="w-full md:h-[350px] h-[150px]"
            src={aboutBanner}
            height={350}
            width={900}
            alt="aboutBanner"
          />
        </div>
        <AboutHome />
        {/* <ImageGallery/> */}
        {/* <ItServices/> */}
        {/* <Brands/> */}
        {/* <Testimonials/> */}
        {/* <FaqHome/> */}
        {/* <Contact/> */}
      </div>
    </>
  );
};

export default page;
