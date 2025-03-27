import Link from "next/link";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import asainLogo from "../../../../public/assets/images/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-black-base">
        <div className="footer-container py-8 md:pt-14 bg-no-repeat">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="flex items-center  space-x-2">
                  <Image
                    className="md:size-14 size-9"
                    src={asainLogo}
                    height={28}
                    width={151}
                    alt="logo"
                  />
                  <h3 className="md:text-2xl text-lg font-semibold text-[#fff]">
                    Core Mind Soft
                  </h3>
                </div>
              </Link>

              <p className="text-sm text-primary-muted pt-6 pb-6">
                Empowering businesses with innovative IT solutions and
                exceptional customer support. Your trusted partner for seamless
                technology integration and reliable IT services. Contact us
                today to explore how Core Mind Soft. can drive your digital
                transformation.
              </p>
              <h5 className="text-[#E9E9EA] pb-4">Follow Us</h5>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61562726343346"
                  target="_blank"
                >
                  <BsFacebook className="social-icons hover:bg-[#5A5FF9] text-[#5A5FF9] hover:text-white duration-150 bg-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ethen-soft/about/?viewAsMember=true"
                  target="_blank"
                >
                  <FaLinkedin className="social-icons hover:bg-[#5A5FF9] text-[#5A5FF9] hover:text-white duration-150 bg-white" />
                </a>
                <a
                  href="https://x.com/EthenSoft?fbclid=IwZXh0bgNhZW0CMTAAAR0t8rfRbeXgm5_8S060kghWEk_PHGc7UWKmQ67ECQsZkEJVw55xt2h5tgU_aem_MYkBOm5VjCMXThOKu09RLA"
                  target="_blank"
                >
                  <FaXTwitter className="social-icons hover:bg-[#5A5FF9] text-[#5A5FF9] hover:text-white duration-150 bg-white" />
                </a>
              </div>
            </div>

            <div className="md:pl-7">
              <div>
                <h1 className="text-primary-muted text-lg font-semibold pb-4">
                  Our Services
                </h1>
                <ul className="space-y-2 cursor-pointer text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
                  <li className="hover:text-[#5A5FF9]">Software Development</li>
                  <li className="hover:text-[#5A5FF9]">Web Development</li>
                  <li className="hover:text-[#5A5FF9]">Graphics Design</li>
                  <li className="hover:text-[#5A5FF9]">UI/UX Design</li>
                  <li className="hover:text-[#5A5FF9]">Video Editing</li>
                  <li className="hover:text-[#5A5FF9]">Digital Marketing</li>
                  <li className="hover:text-[#5A5FF9]">IT Solutions</li>
                </ul>
              </div>
            </div>

            {/* aService  */}
            <div className=" ">
              <div>
                <h1 className="text-primary-muted text-lg font-semibold pb-4">
                  Quick Links
                </h1>
                <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/blogs">Latest Blogs</Link>
                  </li>
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/our-team">Our Team</Link>
                  </li>
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/terms-condition">Terms Condition</Link>
                  </li>
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li className="hover:text-[#5A5FF9]">
                    <Link href="/our-client">Our Clients</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className="text-primary-muted text-lg  font-semibold pb-4 ">
                Feel Free to Contact Us! Say Hello
              </h1>
              <div className="space-y-4">
                <div className="flex items-center gap-x-4">
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

                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">Address</h6>
                    <p>Sirajganj-6770, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
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

                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">Email</h6>
                    <p>asianitinc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
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

                  <div className="text-primary-muted flex flex-col gap-1.5">
                    <h6 className="font-medium">Mobile</h6>
                    <p>0172-3626707</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Footer;
