import React from "react";

const Technologies = () => {
  return (
    <>
      <div className="container py-16">
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
              Our Software Development Technologies
            </h1>
            <p className="text-[20px] pt-2 font-normal text-center ">
              Lorem ipsum dolor sit amet consectetur. Eu nullam ullamcorper et
              fermentum pellentesque augue id. Etiam condimentum malesuada quis
              dui aliquet in aliquam. Arcu pellentesque morbi mattis risus
              potenti mi. Dictum sem leo eros rhoncus fermentum varius
              pellentesque.
            </p>
          </div>
        </div>
        <div className="pt-16 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 ">
          {/* skill */}

          {/* {data?.map((skill) => (
            <SkillCard key={skill._id} item={skill} />
          ))}   */}
        </div>
      </div>
    </>
  );
};

export default Technologies;
