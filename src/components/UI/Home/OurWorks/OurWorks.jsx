import Link from "next/link";
import React from "react";
import Button from "../../Button/Button";
import WorksCard from "./WorksCard";

const OurWorks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-works`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const ourWorksData = data?.data || [];
  return (
    <>
      <div className="bg-[#000] md:py-16 py-9">
        <div className="container">
          <div className="text-white">
            <div className="space-y-4">
              <p
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" md:text-[20px] text-[18px] font-semibold "
              >
                Our Works
              </p>
              <h1 className="md:text-[40px] text-[30px] font-normal ">
                Case studies
              </h1>
              <p className=" text-sm text-gray-base  font-normal  max-w-[490px]">
                Lorem ipsum dolor sit amet consectetur. In non tortor erat
                lectus in amet tellus tincidunt. Sem feugiat semper fringilla
                ante molestie amet faucibus. Pulvinar turpis hac mi augue etiam.
                Id erat id imperdiet posuere senectus purus.
              </p>
            </div>
          </div>

          <div className="md:mt-28 mt-12 space-y-6">
            {/* <AllWork ourWorkDetails={ourWorksData} /> */}
            {ourWorksData?.map((item, index) => (
              <WorksCard item={item} key={index} index={index} />
            ))}
          </div>
          <div className="pt-16 w-44 mx-auto">
            {/* <Link href="">
              <Button content="See all Cases" />
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
