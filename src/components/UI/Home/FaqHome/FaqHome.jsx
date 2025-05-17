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
          <div className=" py-14">
            <TitleSection
              name={"FAQS"}
              description={` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore.`}
              title={"Frequently Asked Questions"}
            />
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
