import Image from "next/image";
import contactBanner from "../../../../public/assets/images/aboutBanner.png";
import Contact from "@/components/UI/Home/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <div>
        <Image
          className="w-full md:h-[350px] h-[150px]"
          src={contactBanner}
          height={350}
          width={900}
          alt="contactBanner"
        />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
