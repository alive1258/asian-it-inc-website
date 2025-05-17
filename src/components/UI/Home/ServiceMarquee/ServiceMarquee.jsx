import Image from "next/image";
import Marquee from "react-fast-marquee";
const ServiceMarquee = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/service-marquee`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const serviceMarqueeData = data?.data || [];
  return (
    <>
      <div className="py-16  space-y-8 bg-[#040408] ">
        {/* left marquee  */}
        <div>
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {serviceMarqueeData?.map((item, index) => (
              <div key={index} className="flex items-center gap-5 mr-8">
                <Image
                  className="size-12 md:size-16"
                  src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                  width={64}
                  height={64}
                  alt="icon"
                />
                <h1 className="text-white text-5xl md:text-[64px] font-bold uppercase">
                  {item?.name}
                </h1>
              </div>
            ))}
          </Marquee>
        </div>

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
          {serviceMarqueeData?.map((item, index) => (
            <div key={index} className="flex items-center gap-5 mr-8">
              <Image
                className="size-12 md:size-16"
                src={process.env.NEXT_PUBLIC_IMAGE_URL + item?.photo}
                width={64}
                height={64}
                alt="icon"
              />
              <h1 className="text-stroke text-transparent text-5xl md:text-[64px] font-bold uppercase">
                {item?.name}
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default ServiceMarquee;
