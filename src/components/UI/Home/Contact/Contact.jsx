import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#E4E5FE]">
        <div className="bg-[url('/assets/images/conatctBg.png')] bg-cover bg-no-repeat pb-16">
          <div className="container">
            <div className="flex justify-center pt-14 ">
              <div>
                <p className="text-[20px] pt-2 font-normal text-center">
                  Contact
                </p>
                <h1
                  className="text-[40px] font-semibold text-center"
                  style={{
                    background:
                      "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Contact Us For Any Questions
                </h1>
                <p className="text-[20px] pt-2 font-normal text-center w-[490px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore.
                </p>
              </div>
            </div>
            <div>
              {/* <BlogSection blogs={blogs} /> */}
              <div className="mt-16"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
