import React from "react";

const JoinUs = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-gray-900">
        <div className="bg-[url('/assets/images/productBg.png')] bg-cover bg-no-repeat ">
          <div className="container text-white">
            <div className="flex justify-center pt-14 ">
              <div>
                <h1
                  className="text-[40px] font-semibold text-center"
                  style={{
                    background:
                      "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Why Join Us
                </h1>
                <p className="text-[20px] pt-2 font-normal">
                  We at Asian it inc. offer some of the most amazing benefits to
                  our employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
