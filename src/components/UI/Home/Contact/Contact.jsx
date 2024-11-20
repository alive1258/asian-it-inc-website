import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="bg-[#E4E5FE]">
        <div className="bg-[url('/assets/images/conatctBg.png')]  bg-cover bg-no-repeat pb-16">
          <div className="container">
            <div className="flex justify-center pt-14 ">
              <div>
                <p className="text-[20px] pt-2 font-normal text-center">
                  Contact
                </p>
                <h1
                  className="text-[40px] font-semibold text-center"
                  style={{
                    background:
                      "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Contact Us For Any Questions
                </h1>
                <p className="text-[20px] pt-2 font-normal text-center w-[490px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore.
                </p>
              </div>
            </div>
            <div>
              <div className="mt-[60px] flex flex-col-reverse md:flex-row gap-10 items-start  justify-between">
                <div className="w-full">
                  <h1 className="text-black-base text-2xl font-semibold pb-10 text-nowrap">
                    Contact Info :
                  </h1>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CiLocationOn className="bg-[#EAEBFE] size-12 p-[10px] rounded-full text-primary-base" />
                      <div className="text-black-base flex flex-col gap-1.5">
                        <h6 className="font-medium">Address</h6>

                        <p>Sirajganj-6770, Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="bg-[#EAEBFE] size-12 p-[10px] rounded-full text-primary-base" />
                      <div className=" flex flex-col gap-1.5">
                        <h6 className="font-medium">+880 1793-636735</h6>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <AiOutlineMail className="bg-[#EAEBFE] size-12 p-[10px] rounded-full text-primary-base" />
                      <div className=" flex flex-col gap-1.5">
                        <h6 className="font-medium">support@ethensoft.com</h6>
                      </div>
                    </div>
                  </div>
                  <h5 className="text-black-base text-sm font-semibold pb-4 pt-10">
                    Follow Us
                  </h5>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61562726343346"
                      target="_blank"
                    >
                      <BsFacebook className="social-icons hover:bg-primary-base hover:text-white text-primary-base" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ethen-soft/about/?viewAsMember=true"
                      target="_blank"
                    >
                      <FaLinkedin className="social-icons hover:bg-primary-base hover:text-white text-primary-base" />
                    </a>
                    <a
                      href="https://x.com/EthenSoft?fbclid=IwZXh0bgNhZW0CMTAAAR0t8rfRbeXgm5_8S060kghWEk_PHGc7UWKmQ67ECQsZkEJVw55xt2h5tgU_aem_MYkBOm5VjCMXThOKu09RLA"
                      target="_blank"
                    >
                      <FaXTwitter className="social-icons hover:bg-primary-base hover:text-white text-primary-base" />
                    </a>
                  </div>
                </div>
                <div className="w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
