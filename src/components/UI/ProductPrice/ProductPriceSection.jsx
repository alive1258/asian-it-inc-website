"use client";
import PricingCard from "./PricingCard";
import Button from "../Button/Button";
// import { applyScrollAnimation } from "@/utils/applyScrollAnimation ";

const ProductPriceSection = ({ prices }) => {
  //   useEffect(() => {
  //     // Use the utility function and pass the section and reveal classes
  //     const cleanup = applyScrollAnimation("section", ".reveal");

  //     // Clean up event listeners when the component is unmounted
  //     return cleanup;
  //   }, []);

  return (
    <>
      <section className=" mt-[10px]  md:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {prices?.map((item) => (
          <>
            <PricingCard item={item} key={item?.id} />
          </>
        ))}
      </section>

      <div className=" flex justify-center items-center pt-10">
        <Button content="View All Products Price" className="p-2" />
      </div>
    </>
  );
};

export default ProductPriceSection;
