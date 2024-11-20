"use client";
import { useEffect, useState } from "react";
import Accordion from "./Accordion";

const  AccordionList = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(()=>{
    if(activeIndex== null){
      setActiveIndex(1);
    }
  },[activeIndex])
  return (
    <div className=" space-y-4">
      {faqs?.length &&
        faqs?.map((accordion, index) => (
          <Accordion
            key={index}
            accordion={accordion}
            isActive={activeIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
    </div>
  );
};

export default AccordionList;
