import React from "react";
import AccordionList from "./AccordionList";
import TitleSection from "../titleSection/TitleSection";

const FaqHome = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const faqsData = data?.data || [];

  return (
    <>
      <div className="bg-[#17181A]">
        <div className="container">
          <div className="py-14">
            <h1 className="text-[#fff] text-center text-[16px]">FAQ</h1>
            <TitleSection title={"Frequently Asked Questions"} />
            <p className="text-[#949494] text-center max-w-[600px] mx-auto">
              {" "}
              Our clients trust Core Mind Soft. for delivering high-quality,
              custom software and website solutions that drive real business
              results. They praise our professionalism, technical expertise, and
              commitment to exceeding expectations.
            </p>
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
