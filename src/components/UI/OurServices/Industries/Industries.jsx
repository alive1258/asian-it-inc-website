import React from "react";
import { FaCheck } from "react-icons/fa";

const Industries = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-900 ">
        <div className="bg-[url('/assets/images/industryBg.png')] bg-cover bg-no-repeat py-16">
          <div className="container">
            <h1
              className="text-[54px] font-semibold flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Industries We Cover
            </h1>

            <div className="pt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-12">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#fff] h-6 w-6 rounded-lg flex  justify-center items-center">
                    <FaCheck className="text-[16px] text-primary-base" />
                  </div>
                  <p className="text-[#fff] text-[18px] font-medium">
                    A.I Software
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-[#fff] h-6 w-6 rounded-lg flex  justify-center items-center">
                    <FaCheck className="text-[16px] text-primary-base" />
                  </div>
                  <p className="text-[#fff] text-[18px] font-medium">
                    A.I Software
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-[#fff] h-6 w-6 rounded-lg flex  justify-center items-center">
                    <FaCheck className="text-[16px] text-primary-base" />
                  </div>
                  <p className="text-[#fff] text-[18px] font-medium">
                    A.I Software
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-[#fff] h-6 w-6 rounded-lg flex  justify-center items-center">
                    <FaCheck className="text-[16px] text-primary-base" />
                  </div>
                  <p className="text-[#fff] text-[18px] font-medium">
                    A.I Software
                  </p>
                </div>
              </div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#5A5FF9] size-96 opacity-20 rounded-[1077.908px] relative  left-[400px]"></div> */}
      </div>
    </>
  );
};

export default Industries;
