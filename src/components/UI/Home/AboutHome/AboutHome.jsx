import React from "react";
import projectIcon from "../../../../../public/assets/images/project.png";
import imageAi from "../../../../../public/assets/images/imageAi.png";
import platBtn from "../../../../../public/assets/images/playbtn.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";
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
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
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
                <h1 className="text-[32px] pt-4 font-semibold">
                  {aboutData?.name?.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-[#5A5FF9]">
                    {aboutData?.name?.split(" ").slice(-2).join(" ")}
                  </span>
                </h1>

                <p className="pt-6">
                  {aboutData?.description}
                </p>

                {/* Cards section */}
                <div className="pt-6">
                  <div className="flex space-x-4">
                    {/* Project card */}
                    <div className="bg-[#7579FA]/10 p-4 w-40 h-auto rounded-lg">
                      <div className="flex items-center gap-x-3">
                        <Image
                          className="size-10 "
                          src={projectIcon}
                          height={28}
                          width={151}
                          alt="logo"
                        />
                        <div>
                          <h3 className="text-[32px] font-semibold">110+</h3>
                          <p className="text-[16px]">{aboutData?.project}</p>
                        </div>
                      </div>
                    </div>
                    {/* Experience card */}
                    <div className="bg-[#7579FA]/10 p-4 h-auto rounded-lg">
                      <div className="flex items-center gap-x-5">
                        <Image
                          className="size-10 "
                          src={projectIcon}
                          height={28}
                          width={151}
                          alt="logo"
                        />
                        <div>
                          <h3 className="text-[32px] font-semibold">10+</h3>
                          <p className="text-[16px]">Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 flex space-x-4">
                    {/* Client Satisfaction card */}
                    <div className="bg-[#7579FA]/10 p-4 h-auto rounded-lg">
                      <div className="flex items-center gap-x-5">
                        <Image
                          className="size-10 "
                          src={projectIcon}
                          height={28}
                          width={151}
                          alt="logo"
                        />
                        <div>
                          <h3 className="text-[32px] font-semibold">99%</h3>
                          <p className="text-[16px]">Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                    {/* Team Member card */}
                    <div className="bg-[#7579FA]/10 p-4 h-auto rounded-lg">
                      <div className="flex items-center gap-x-5">
                        <Image
                          className="size-10 "
                          src={projectIcon}
                          height={28}
                          width={151}
                          alt="logo"
                        />
                        <div>
                          <h3 className="text-[32px] font-semibold">30+</h3>
                          <p className="text-[16px]">Team Member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Us button */}
                <div className="pt-16 w-40">
                  <Link href="/contact-us">
                    <Button content="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="py-24">
              <div className="bg-[#B5B7FC] rounded-lg">
                <Image
                  className="w-full relative bottom-3 left-3 h-auto"
                  src={imageAi}
                  height={400}
                  width={400}
                  alt="home about image"
                />
              </div>
              <div className="flex justify-center items-center bottom-72 relative z-50">
                <Image
                  className="size-20 rounded-full"
                  src={platBtn}
                  height={20}
                  width={20}
                  alt="home about image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
