"use client";
import Image from "next/image";
import projectIcon from "../../../../../public/assets/images/project.png";
import { motion } from "framer-motion";
const AboutDescription = ({ aboutData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: -0,

        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: false }}
    >
      <h1 className="md:text-[32px] text-[24px] pt-4 font-semibold">
        {aboutData?.name?.split(" ").slice(0, -2).join(" ")}{" "}
        <span className="text-[#5A5FF9]">
          {aboutData?.name?.split(" ").slice(-2).join(" ")}
        </span>
      </h1>

      <p className="pt-6">{aboutData?.description}</p>

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
                <h3 className="text-[32px] font-semibold">
                  {aboutData?.project}
                </h3>
                <p className="text-[16px]">Project</p>
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
                <h3 className="text-[32px] font-semibold">
                  {aboutData?.experience}
                </h3>
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
                <h3 className="text-[32px] font-semibold">
                  {aboutData?.client_satisfaction}
                </h3>
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
                <h3 className="text-[32px] font-semibold">
                  {aboutData?.team_member}
                </h3>
                <p className="text-[16px]">Team Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutDescription;
