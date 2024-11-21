import HeroBanners from "@/components/shared/hero-banners/HeroBanners";
import Contact from "@/components/UI/Home/Contact/Contact";
export async function generateMetadata() {
  return {
    title: `Contact Us | Asian it inc`,
    description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
  };
}
const ContactPage = () => {
  return (
    <>
      <div>
        <HeroBanners />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
