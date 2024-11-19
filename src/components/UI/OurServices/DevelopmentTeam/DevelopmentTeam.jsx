import Image from "next/image";
import React from "react";
import asianItIncLogo from "../../../../../public/assets/images/logo.png";

const DevelopmentTeam = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-950 ">
        <div className="container py-16">
          <h1 className="text-[40px] flex justify-center text-[#fff]">
            Our Development Team Capabilities
          </h1>
          <div className="pt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12">
            <div>
              <div className="flex justify-center items-center">
                <Image
                  className="md:size-12  border-[#7579FA] border-2  size-9 rounded-full"
                  src={asianItIncLogo}
                  height={28}
                  width={151}
                  alt="logo"
                />
              </div>
              <p className="pt-8">
                Enhancing User Experience through Professional Front End
                Development{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopmentTeam;
