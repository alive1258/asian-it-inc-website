import React from "react";
import Team from "@/components/UI/Team/team";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
export async function generateMetadata() {
  return {
    title: `Our Teams | Asian it inc`,
    description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
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
