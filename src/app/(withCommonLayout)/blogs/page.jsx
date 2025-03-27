import Blogs from "@/components/UI/Home/Blogs/Blogs";
import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
export async function generateMetadata() {
  return {
    title: `Blogs |  Core Mind Soft`,
    description:
      " Core Mind Soft provides custom web and mobile app solutions for businesses.",
  };
}
const page = () => {
  return (
    <>
      <div>
        <HeroBanners />
      </div>
      <Blogs />
    </>
  );
};

export default page;
