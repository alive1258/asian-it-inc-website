"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMiniXMark, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import ButtonOutline from "@/components/UI/Button/ButtonOutline";
import asianItIncLogo from "../../../../public/assets/images/logo.png";
import { useScroll } from "@/utils/scrollUtils";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const isScrolled = useScroll(); // Use the utility function

  const topFunction = () => {
    setOpen(!open);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const items = [
    { display: "Home", path: "/" },
    { display: "About Us", path: "/about-us" },
    { display: "Services", path: "/our-services" },
    { display: "Products", path: "/our-products" },
    { display: "Pricing", path: "/pricing" },
    { display: "Our Works", path: "/our-works" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#fff] shadow-md text-gray-900"
          : "text-[#fff] bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] w-full px-5 md:px-20 mx-auto md:h-[75px] h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              className="md:size-12 size-9"
              src={asianItIncLogo}
              height={28}
              width={151}
              alt="logo"
            />
            <h3
              className={`md:text-2xl text-lg font-bold ${
                isScrolled ? "text-[#3137F8]" : "text-[#fff]"
              }`}
            >
              ASIAN IT INC
            </h3>
          </div>
        </Link>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden block mr-5">
          <button className="pt-1.5 rounded-md" onClick={topFunction}>
            {open ? (
              <HiMiniXMark
                className={`size-10 bg-[#F4EDF7] rounded-lg p-1 text-lg ${
                  isScrolled ? "text-gray-900" : "text-red-900"
                }`}
              />
            ) : (
              <HiOutlineBars3BottomLeft
                className={`size-10 bg-[#F4EDF7] rounded-lg p-1 text-lg ${
                  isScrolled ? "text-gray-900" : "text-primary-base"
                }`}
              />
            )}
          </button>
        </div>

        {/*  Nav Items */}
        <ul
          className={`flex flex-col md:flex-row items-center md:gap-y-0 gap-y-4 md:pb-0 pb-10 pt-20 md:pt-0 absolute md:static md:z-auto z-[-1] top-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open
              ? "left-0 right-0 z-10 bg-white text-gray-900 h-screen md:h-auto w-full"
              : "-left-full right-0 md:left-0 md:right-auto h-screen md:h-auto"
          } md:bg-transparent md:text-[#fff]`}
        >
          {items.map(({ display, path }) => {
            const isActive = pathName === path;

            return (
              <Link
                onClick={topFunction}
                key={display}
                className={`md:ml-6 font-normal duration-300  ${
                  isActive
                    ? `font-semibold  ${
                        isScrolled ? "text-[#3137F8]" : "text-[#3137F8]"
                      }`
                    : `${isScrolled ? "md:text-gray-900" : "md:text-white"}`
                }`}
                href={path}
              >
                {display}
              </Link>
            );
          })}

          <div className="md:ml-6 ">
            <Link onClick={topFunction} href="/contact-us">
              <ButtonOutline
                className={` ${
                  isScrolled
                    ? "bg-[#fff] shadow-md text-gray-900"
                    : " text-black bg-transparent"
                }`}
                content="Contact Us"
              />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
