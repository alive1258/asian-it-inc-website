import Image from "next/image";
import aboutBannerPic from "../../../../../public/assets/images/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div>
      <Image
        className="w-full md:h-[350px] h-[170px]"
        src={aboutBannerPic}
        height={350}
        width={900}
        alt="aboutBannerPic"
      />
    </div>
  );
};

export default AboutBanner;
