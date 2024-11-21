import Blogs from "@/components/UI/Home/Blogs/Blogs";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
export async function generateMetadata() {
  return {
    title: `Blogs | Asian it inc`,
    description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
  };
}
const page = () => {
  return (
    <>
      <div>
        <HeroBanners/>
      </div>
      <Blogs />
    </>
  );
};

export default page;
