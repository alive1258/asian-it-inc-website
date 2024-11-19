import React from "react";

const FaqHome = () => {
  return (
    <>
      <div className="bg-[#17181A]">
        <div className="container">
          <div className="flex text-white justify-center py-14 ">
            <div>
              <p className="text-[20px] pt-2 font-normal text-center">FAQ</p>
              <h1
                className="text-[40px] font-semibold text-center"
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frequently Asked Questions
              </h1>
              <p className="text-[20px] pt-2 font-normal text-center w-[490px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHome;
