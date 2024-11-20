import React from "react";
import AccordionList from "./AccordionList";

const FaqHome = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const faqsData = data?.data || [];

  return (
    <>
      <div className="bg-[#17181A]">
        <div className="container">
          <div className="flex text-white justify-center py-14 ">
            <div className=" max-w-[650px] mx-auto space-y-4">
              <p className="text-[20px] font-normal text-center">FAQS</p>
              <h1
                className=" text-[25px] md:text-[40px] font-semibold text-center"
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Frequently Asked Questions
              </h1>
              <p className=" text-sm md:text-[18px]  text-gray-base text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore.
              </p>
            </div>
          </div>

          <div className="w-full md:py-14">
            <AccordionList faqs={faqsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHome;
