import AboutHome from "@/components/UI/Home/AboutHome/AboutHome";
import Banner from "@/components/UI/Home/Banner/Banner";
import Blogs from "@/components/UI/Home/Blogs/Blogs";
import Brands from "@/components/UI/Home/Brands/Brands";
import Contact from "@/components/UI/Home/Contact/Contact";
import FaqHome from "@/components/UI/Home/FaqHome/FaqHome";
import OurProducts from "@/components/UI/Home/OurProducts/OurProducts";
import OurWorks from "@/components/UI/Home/OurWorks/OurWorks";
import ServiceMarquee from "@/components/UI/Home/ServiceMarquee/ServiceMarquee";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";
import WhyTrustUs from "@/components/UI/Home/WhyTrustUs/WhyTrustUs";
import Service from "@/components/UI/OurServices/services/Service";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <ServiceMarquee />
        <Service />
        <AboutHome />
        <OurProducts />
        <WhyTrustUs />
        <Brands />
        <OurWorks />
        <Testimonials />
        <Blogs />
        <FaqHome />
        <Contact />
      </main>
    </>
  );
}
