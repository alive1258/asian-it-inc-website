import React from "react";

const TitleSection = ({ name, title, description, color }) => {
  return (
    <>
      <div
        className={`flex ${color ? " text-black-base " : " text-white"} justify-center`}
      >
        <div className=" max-w-[650px] mx-auto space-y-4">
          <p className="text-[20px] font-normal text-center">{name}</p>
          <h1
            className=" text-[25px] md:text-[40px] font-semibold text-center"
            style={{
              background:
                "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h1>
          <p className={`text-sm md:text-[18px] ${color ? "text-black-base" : "text-gray-base "}  text-center`}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
