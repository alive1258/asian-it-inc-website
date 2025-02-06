import Image from "next/image";
import aboutBannerPic from "../../../../../public/assets/images/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div className="bg-[url('/assets/images/aboutBanner.png')] bg-cover bg-center bg-no-repeat"></div>
  );
};

export default AboutBanner;
