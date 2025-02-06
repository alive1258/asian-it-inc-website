import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import TitleSection from "../titleSection/TitleSection";

const Contact = () => {
  return (
    <div className="bg-[#F7F7FF] overflow-hidden">
      <div className="relative  pb-16">
        {/* SVG Background Layer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1858"
          height="794"
          viewBox="0 0 1058 794"
          fill="none"
          className="absolute left-[150px] top-[-35px] z-0"
          style={{
            fill: "#C4C4C4",
            mixBlendMode: "color-dodge",
            opacity: 0.8,
          }}
        >
          <g style={{ mixBlendMode: "color-dodge" }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M521.803 -132.016C622.668 -101.165 587.013 80.7101 673.477 141.111C740.281 187.777 841.076 108.064 914.896 142.583C990.407 177.893 1058.28 248.088 1076.27 329.465C1094.28 410.89 1042.99 491.055 1008.77 567.108C978.657 634.05 936.043 692.443 888.004 747.952C841.291 801.929 801.606 885.014 730.316 888.863C649.026 893.252 599.821 790.966 521.803 767.724C471.116 752.624 418.511 780.704 365.624 780.217C287.678 779.499 203.104 802.551 135.267 764.164C67.204 725.649 -14.4531 650.958 2.18562 574.558C22.7162 480.288 203.26 481.973 217.505 386.551C233.566 278.969 43.6664 203.054 73.2738 98.3859C96.5347 16.1536 241.683 71.3503 317.713 32.2951C396.39 -8.12013 437.218 -157.888 521.803 -132.016Z"
              fill="#C4C4C4"
            />
          </g>
        </svg>

        {/* Content Layer */}
        <div className="container relative z-10 pt-10">
          <h1
            className="text-center text-[16px] "
            style={{
              background:
                "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact
          </h1>
          <TitleSection
            color={true}
            title="Contact Us For Any Questions"
            description="Partner with Asian IT Inc. for cutting-edge IT solutions, tailored to drive your business forward.Our expert team is ready to assist you—reach out today and experience seamless technology solutions.From IT consulting to software development, Asian IT Inc. is here to transform your vision into reality."
          />
          <div className="mt-[90px] flex flex-col-reverse md:flex-row gap-10 items-start justify-between">
            <div className="w-full">
              <h1 className="text-black-base text-2xl font-semibold ">
                Contact Info :
              </h1>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {/* <CiLocationOn className="bg-red-400 size-16 rounded-full p-3 text-primary-base" /> */}
                  <div className="bg-[#EAEBFE] size-10 rounded-full flex items-center justify-center text-primary-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_9234_2818)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 1.66602C11.9891 1.66602 13.8968 2.45619 15.3033 3.86271C16.7098 5.26924 17.5 7.17689 17.5 9.16602C17.5 11.7277 16.1033 13.8244 14.6317 15.3285C13.8964 16.0719 13.0941 16.7459 12.235 17.3419L11.88 17.5835L11.7133 17.6943L11.3992 17.8944L11.1192 18.0652L10.7725 18.2668C10.5372 18.4012 10.2709 18.4718 10 18.4718C9.72906 18.4718 9.4628 18.4012 9.2275 18.2668L8.88083 18.0652L8.4475 17.7985L8.2875 17.6943L7.94583 17.4669C7.01903 16.8398 6.15575 16.1236 5.36833 15.3285C3.89667 13.8235 2.5 11.7277 2.5 9.16602C2.5 7.17689 3.29018 5.26924 4.6967 3.86271C6.10322 2.45619 8.01088 1.66602 10 1.66602ZM10 3.33268C8.4529 3.33268 6.96917 3.94726 5.87521 5.04123C4.78125 6.13519 4.16667 7.61892 4.16667 9.16602C4.16667 11.101 5.22667 12.7993 6.55917 14.1627C7.13211 14.7427 7.75138 15.275 8.41083 15.7543L8.7925 16.026C8.91583 16.1121 9.03444 16.1921 9.14833 16.266L9.47333 16.4743L9.75917 16.6485L10 16.7894L10.3792 16.5652L10.685 16.3735C10.8478 16.2702 11.0219 16.1544 11.2075 16.026L11.5892 15.7543C12.2486 15.275 12.8679 14.7427 13.4408 14.1627C14.7733 12.8002 15.8333 11.101 15.8333 9.16602C15.8333 7.61892 15.2188 6.13519 14.1248 5.04123C13.0308 3.94726 11.5471 3.33268 10 3.33268ZM10 5.83268C10.8841 5.83268 11.7319 6.18387 12.357 6.80899C12.9821 7.43411 13.3333 8.28196 13.3333 9.16602C13.3333 10.0501 12.9821 10.8979 12.357 11.523C11.7319 12.1482 10.8841 12.4993 10 12.4993C9.11594 12.4993 8.2681 12.1482 7.64298 11.523C7.01786 10.8979 6.66667 10.0501 6.66667 9.16602C6.66667 8.28196 7.01786 7.43411 7.64298 6.80899C8.2681 6.18387 9.11594 5.83268 10 5.83268ZM10 7.49935C9.55797 7.49935 9.13405 7.67494 8.82149 7.9875C8.50893 8.30007 8.33333 8.72399 8.33333 9.16602C8.33333 9.60804 8.50893 10.032 8.82149 10.3445C9.13405 10.6571 9.55797 10.8327 10 10.8327C10.442 10.8327 10.866 10.6571 11.1785 10.3445C11.4911 10.032 11.6667 9.60804 11.6667 9.16602C11.6667 8.72399 11.4911 8.30007 11.1785 7.9875C10.866 7.67494 10.442 7.49935 10 7.49935Z"
                          fill="#3137F8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9234_2818">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="text-black-base flex flex-col gap-1.5">
                    <h6 className="font-medium">Address</h6>
                    <p>Sirajganj-6770, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* <CiLocationOn className="bg-red-400 size-16 rounded-full p-3 text-primary-base" /> */}
                  <div className="bg-[#EAEBFE] size-10 rounded-full flex items-center justify-center text-primary-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.3177 2.91797H5.56771C3.72676 2.91797 2.23438 4.41035 2.23438 6.2513V13.7513C2.23438 15.5923 3.72676 17.0846 5.56771 17.0846H14.3177C16.1587 17.0846 17.651 15.5923 17.651 13.7513V6.2513C17.651 4.41035 16.1587 2.91797 14.3177 2.91797Z"
                        stroke="#3137F8"
                        stroke-width="1.25"
                      />
                      <path
                        d="M2.27344 6.32617L8.2776 9.76784C8.78064 10.0601 9.35207 10.2141 9.93385 10.2141C10.5156 10.2141 11.0871 10.0601 11.5901 9.76784L17.6109 6.32617"
                        stroke="#3137F8"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="text-black-base flex flex-col gap-1.5">
                    <h6 className="font-medium">Email</h6>
                    <p>asianitinc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* <CiLocationOn className="bg-red-400 size-16 rounded-full p-3 text-primary-base" /> */}
                  <div className="bg-[#EAEBFE] size-10 rounded-full flex items-center justify-center text-primary-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.65813 1.88968L6.84385 1.53254C7.3836 1.3697 7.96417 1.40885 8.47717 1.64267C8.99018 1.8765 9.40056 2.28903 9.63171 2.80325L10.3696 4.44468C10.5684 4.88687 10.6238 5.38021 10.5279 5.85547C10.4321 6.33074 10.1899 6.76408 9.83528 7.09468L8.54599 8.29682C8.53056 8.31215 8.51756 8.32973 8.50742 8.34897C8.37242 8.62468 8.57742 9.36111 9.21956 10.474C9.94385 11.7283 10.5031 12.224 10.7624 12.1475L12.4546 11.6297C12.918 11.4882 13.4141 11.4952 13.8733 11.6498C14.3325 11.8044 14.7318 12.0988 15.0153 12.4918L16.0638 13.944C16.3931 14.3999 16.5455 14.9599 16.493 15.5198C16.4404 16.0797 16.1864 16.6015 15.7781 16.9883L14.876 17.8418C14.5623 18.139 14.1813 18.3558 13.7657 18.4739C13.35 18.5919 12.9119 18.6076 12.4888 18.5197C9.97671 17.9968 7.72599 15.974 5.71742 12.4954C3.70813 9.01468 3.08171 6.05039 3.88885 3.61254C4.02396 3.2044 4.25533 2.83478 4.5634 2.53491C4.87148 2.23504 5.2465 2.01373 5.65813 1.88968ZM5.96885 2.91539C5.72186 2.98979 5.4964 3.12254 5.31153 3.30244C5.12666 3.48234 4.98781 3.70409 4.90671 3.94897C4.21099 6.04968 4.77456 8.71825 6.64599 11.9597C8.51599 15.199 10.5431 17.0204 12.7081 17.4704C12.962 17.5231 13.2248 17.5136 13.4742 17.4427C13.7236 17.3718 13.9521 17.2416 14.1403 17.0633L15.0417 16.2104C15.2616 16.0022 15.3985 15.7212 15.4269 15.4197C15.4553 15.1182 15.3732 14.8167 15.196 14.5711L14.1474 13.1183C13.9948 12.9067 13.7798 12.7482 13.5326 12.6649C13.2854 12.5817 13.0183 12.5778 12.7688 12.654L11.0724 13.1733C10.1338 13.4525 9.25099 12.6704 8.29242 11.009C7.48028 9.60325 7.19885 8.58754 7.54599 7.87825C7.61361 7.74016 7.70361 7.61849 7.81599 7.51325L9.10528 6.31111C9.29631 6.13309 9.42679 5.89973 9.47842 5.64377C9.53005 5.38781 9.50022 5.12211 9.39313 4.88397L8.65456 3.24325C8.5301 2.96629 8.30909 2.74411 8.03279 2.61818C7.7565 2.49226 7.44381 2.47121 7.15313 2.55897L5.96885 2.91539Z"
                        fill="#3137F8"
                      />
                    </svg>
                  </div>

                  <div className="text-black-base flex flex-col gap-1.5">
                    <h6 className="font-medium">Mobile</h6>
                    <p>017-23626707</p>
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
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="social-icons hover:bg-primary-base hover:text-white text-primary-base" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ethen-soft/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icons hover:bg-primary-base hover:text-white text-primary-base" />
                </a>
                <a
                  href="https://x.com/EthenSoft?fbclid=IwZXh0bgNhZW0CMTAAAR0t8rfRbeXgm5_8S060kghWEk_PHGc7UWKmQ67ECQsZkEJVw55xt2h5tgU_aem_MYkBOm5VjCMXThOKu09RLA"
                  target="_blank"
                  rel="noopener noreferrer"
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
  );
};

export default Contact;
