import React from "react";
import projectIcon from "../../../../../public/assets/images/project.png";
import imageAi from "../../../../../public/assets/images/imageAi.png";
import platBtn from "../../../../../public/assets/images/playbtn.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button/Button";

const AboutHome = () => {
  return (
    <>
      <div className="bg-[#fff]">
        <div className="container ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className=" bg-[url('/assets/images/homeAboutBg.png')] py-20 bg-cover bg-center bg-no-repeat ">
              {/* <div className="bg-[url('/assets/images/homeAboutBg.png')] py-20 bg-cover bg-center bg-no-repeat bg-opacity-40"> */}
              <div className="opacity-100 z-50">
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
                  We design, develop, implement and support{" "}
                  <span className="text-[#5A5FF9]">IT Systems</span>
                </h1>
                <p className="pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat aute irure dolor in reprehenderit velit.
                </p>
                <div className="pt-6">
                  <div className="flex space-x-4">
                    <div className="bg-[#7579FA]/10 p-4 w-40  h-auto rounded-lg">
                      <div className="flex items-center gap-x-3 ">
                        <div>
                          <Image
                            className="size-10 "
                            src={projectIcon}
                            height={28}
                            width={151}
                            alt="logo"
                          />
                        </div>
                        <div>
                          <h3 className="text-[32px] font-semibold">110+</h3>
                          <p className="text-[16px]">Project</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#7579FA]/10 p-4   h-auto rounded-lg">
                      <div className="flex items-center gap-x-5 ">
                        <div>
                          <Image
                            className="size-10 "
                            src={projectIcon}
                            height={28}
                            width={151}
                            alt="logo"
                          />
                        </div>
                        <div>
                          <h3 className="text-[32px] font-semibold">10+</h3>
                          <p className="text-[16px]">Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 space-x-4 flex">
                    <div className="bg-[#7579FA]/10 p-4  h-auto rounded-lg">
                      <div className="flex items-center gap-x-5 ">
                        <div>
                          <Image
                            className="size-10 "
                            src={projectIcon}
                            height={28}
                            width={151}
                            alt="logo"
                          />
                        </div>
                        <div>
                          <h3 className="text-[32px] font-semibold">99%</h3>
                          <p className="text-[16px]">Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#7579FA]/10 p-4   h-auto rounded-lg">
                      <div className="flex items-center gap-x-5 ">
                        <div>
                          <Image
                            className="size-10 "
                            src={projectIcon}
                            height={28}
                            width={151}
                            alt="logo"
                          />
                        </div>
                        <div>
                          <h3 className="text-[32px] font-semibold">30+</h3>
                          <p className="text-[16px]">Team Member</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-16 w-40">
                  <Link href="/contact-us">
                    <Button content="Contact Us" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-24">
              <div className="bg-[#B5B7FC] rounded-lg ">
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
