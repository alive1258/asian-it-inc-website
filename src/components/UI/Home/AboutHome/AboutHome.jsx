import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";
import VideoSection from "./VideoSection";
import AboutDescription from "./AboutDescription";
const AboutHome = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const aboutData = data?.data || [];

  return (
    <>
      <div className="relative bg-[#EFEFFE] ">
        <div className="container pt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-4">
            {/* Semi-transparent background section */}
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/assets/images/homeAboutBg.png')] bg-lightgray bg-[0px_-155.772px] bg-[length:100%_113.232%] bg-no-repeat mix-blend-color-burn opacity-60 z-0" />

              {/* Content area - with full opacity */}
              <div className="relative z-10 opacity-100">
                <h2 className="text-[18px] font-normal">
                  ABOUT{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ASIAN IT INC.
                  </span>
                </h2>
                <AboutDescription aboutData={aboutData} />

                {/* Contact Us button */}
                <div className="pt-16 w-40">
                  <Link href="/contact-us">
                    <Button content="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Video section */}
            <div className="md:py-24 py-8">
              <VideoSection aboutData={aboutData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
