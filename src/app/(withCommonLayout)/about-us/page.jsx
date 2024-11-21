// import ImageGallery from "@/components/UI/AboutUs/ImageGallery/ImageGallery";
// import ItServices from "@/components/UI/AboutUs/ItServices/ItServices";
import AboutHome from "@/components/UI/Home/AboutHome/AboutHome";
import Contact from "@/components/UI/Home/Contact/Contact";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import Brands from "@/components/UI/Home/Brands/Brands";
import ImageGallery from "@/components/UI/AboutUs/ImageGallery/ImageGallery";
import ItServices from "@/components/UI/AboutUs/ItServices/ItServices";
const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const aboutData = data?.data || [];
  return (
    <>
      <div className=" mt-20">
        <AboutHome />
        <ImageGallery photos={aboutData?.photos}/>
        <ItServices aboutData={aboutData}/>
        <Brands />
        <Testimonials />
        <FaqHome />
        <Contact />
      </div>
    </>
  );
};

export default page;
