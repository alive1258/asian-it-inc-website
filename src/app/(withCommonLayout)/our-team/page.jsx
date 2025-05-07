import React from "react";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
import Team from "@/components/UI/Team/Team";
export async function generateMetadata() {
  return {
    title: `Our Teams |  Core Mind Soft`,
    description:
      " Core Mind Soft provides custom web and mobile app solutions for businesses.",
  };
}
const page = () => {
  return (
    <>
      <div>
        <HeroBanners />
        <Team />
      </div>
    </>
  );
};

export default page;
