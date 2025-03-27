import TechnologyCard from "./TechnologyCard";

const Technologies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/technologies`);
  const data = await res.json();
  const technologies = data?.data || [];
  return (
    <>
      <div className=" bg-white">
        <div className="container md:py-16 py-7">
          <div className="flex justify-center pt-14 ">
            <div>
              <h1
                className="md:text-[40px]  text-[30px] font-semibold text-center"
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Software Development Technologies
              </h1>
              <p className="md:text-[20px] text-[16px] pt-2 font-normal text-center ">
                Core Mind Soft. provides innovative software development
                solutions tailored to meet business needs with efficiency and
                reliability. We prioritize innovation, scalability, and security
                to create robust digital experiences.Our team of experts ensures
                seamless development, meeting industry standards and client
                expectations. With a commitment to excellence, we transform
                ideas into high-performance software solutions.
              </p>
            </div>
          </div>
          <div className="pt-16 flex flex-wrap  gap-5 ">
            {/* skill */}

            {technologies?.map((skill, index) => (
              <TechnologyCard key={skill?.id} item={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
