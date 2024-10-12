import AboutHome from "@/components/UI/Home/AboutHome/AboutHome";
import Banner from "@/components/UI/Home/Banner/Banner";
import Hero from "@/components/UI/Home/Hero/Hero";
import ServiceMarquee from "@/components/UI/Home/ServiceMarquee/ServiceMarquee";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <ServiceMarquee />
        <AboutHome />
      </main>
    </>
  );
}
