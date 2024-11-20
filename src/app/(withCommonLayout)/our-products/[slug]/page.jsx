import ProductsDetailsSection from "@/components/UI/Home/OurProducts/ProductsDetailsSection";
import React from "react";

const page = ({params}) => {
  return (
    <div>
      <ProductsDetailsSection id={params.id} />
    </div>
  );
};

export default page;
