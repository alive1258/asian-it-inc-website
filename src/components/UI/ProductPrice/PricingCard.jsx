"use  client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { truncateCharacters } from "@/utils/descriptionTextCounter";
import Button from "../Button/Button";

const PricingCard = async ({ item }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    // Generate a green-dominant random color
    const generateGreenShade = () => {
      const red = Math.floor(Math.random() * 100); // Lower red component
      const green = Math.floor(Math.random() * 156) + 100; // Higher green component
      const blue = Math.floor(Math.random() * 100); // Lower blue component
      return `rgb(${red}, ${green}, ${blue})`;
    };

    setBgColor(generateGreenShade());
  }, []);
  return (
    <>
      <div
        className={`relative text-center cursor-pointer p-4 flex flex-col  justify-center border rounded-lg duration-200 hover:duration-300 bg-[#fff] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 space-y-4 group overflow-hidden dynamic-hover`}
      >
        <div
          className="flex justify-center items-center mx-auto w-[100px] h-[100px] rounded-full"
          style={{
            backgroundColor: bgColor,
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
            className="w-[56px] h-[56px]"
            style={{
              backgroundColor: item?.colorCode || "transparent", // Default to item color or transparent
            }}
            width={56}
            height={56}
            alt="service icon"
          />
        </div>
        <h1 className="md:text-xl text-lg text-black-base font-medium ">
          {item?.name}
        </h1>
        <p>{truncateCharacters(item?.description, 70)}</p>
        <div className="flex items-center justify-between">
          <h1 className="text-base text-black-base font-medium z-[500]">
            Start at $ <span> {item?.price}</span>{" "}
          </h1>
          {/* <Link href={`/pricing/${item?.id}`}>
            <Button content="Buy Now" className="p-2" />
          </Link> */}
        </div>

        {/* hover effect */}
        <div className="absolute top-36 right-32 opacity-0 group-hover:opacity-100 duration-300">
          <div className="relative w-[536px] h-[536px] opacity-40 ">
            <div
              className="absolute w-[488px] h-[488px] left-[48px] top-0 rounded-full"
              style={{ backgroundColor: bgColor, opacity: "16%" }}
            ></div>
            <div
              className="absolute w-[488px] h-[488px] left-[32px] top-[16px] rounded-full"
              style={{ backgroundColor: bgColor, opacity: "16%" }}
            ></div>
            <div
              className="absolute w-[488px] h-[488px] left-[16px] top-[32px] rounded-full"
              style={{ backgroundColor: bgColor, opacity: "16%" }}
            ></div>
            <div
              className="absolute w-[488px] h-[488px] left-0 top-[48px] rounded-full"
              style={{ backgroundColor: bgColor, opacity: "16%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
