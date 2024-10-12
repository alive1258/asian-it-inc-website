import Image from "next/image";
import Marquee from "react-fast-marquee";
import icon from "../../../../../public/assets/images/starIcon.png";
import icon2 from "../../../../../public/assets/images/starIcon.png";

const ServiceMarquee = () => {
  return (
    <>
      <div className="py-16 space-y-8 bg-[#040408]">
        {/* left marquee  */}
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex items-center gap-5 mr-8">
            <Image
              className="size-12 md:size-16"
              src={icon}
              width={64}
              height={64}
              alt="icon"
            />
            <h1 className="text-white text-5xl md:text-[64px] font-bold uppercase">
              Senior software developer
            </h1>
          </div>
          <div className="flex items-center gap-5 mr-8">
            <Image
              className="size-12 md:size-16"
              src={icon}
              width={64}
              height={64}
              alt="icon"
            />
            <h1 className="text-white text-5xl md:text-[64px] font-bold uppercase">
              Senior software developer
            </h1>
          </div>
          <div className="flex items-center gap-5 mr-8">
            <Image
              className="size-12 md:size-16"
              src={icon}
              width={64}
              height={64}
              alt="icon"
            />
            <h1 className="text-white text-5xl md:text-[64px] font-bold uppercase">
              Senior software developer
            </h1>
          </div>
        </Marquee>

        {/* right marquee  */}
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          <div className="flex items-center gap-5 mr-8">
            <Image
              className="size-12 md:size-16"
              src={icon2}
              width={64}
              height={64}
              alt="icon"
            />
            <h1 className="text-stroke text-transparent text-5xl md:text-[64px] font-bold uppercase">
              Senior software developer
            </h1>
          </div>
          <div className="flex items-center gap-5 mr-8">
            <Image
              className="size-12 md:size-16"
              src={icon2}
              width={64}
              height={64}
              alt="icon"
            />
            <h1 className="text-stroke text-transparent text-5xl md:text-[64px] font-bold uppercase">
              Senior software developer
            </h1>
          </div>
          <div className="flex items-center gap-5 mr-8">
            <Image
              className="size-12 md:size-16"
              src={icon2}
              width={64}
              height={64}
              alt="icon"
            />
            <h1 className="text-stroke text-transparent text-5xl md:text-[64px] font-bold uppercase">
              Senior software developer
            </h1>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ServiceMarquee;
