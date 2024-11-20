import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProductHoverEffect = ({ item }) => {
  //   const techArray = ourWorkDetail?.tech
  //     ?.split(", ")
  //     .slice(0, 3)
  //     .map((tech) => `#${tech.trim()}`);

  return (
    <>
      <div
        style={{
          borderRadius: "8px",
          borderBottom: "4px solid var(--Primary-primary-300, #7579FA)",
        }}
        className="absolute inset-0 bg-gradient-to-b from-[#000000]/10 to-[#000000]/100 rounded-lg p-6 transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-between"
      >
        <div className="flex flex-col justify-end mt-auto">
          <div>
            <h1 className="text-white text-2xl capitalize font-semibold">
              {/* {ourWorkDetail?.type} */}
              {item?.name}
            </h1>
            <p className="text-white">
              {" "}
              {item?.productTopCategory?.name} Application
            </p>
            {/* <p className="text-white">{ourWorkDetail?.title}</p> */}
            <div className="flex items-center gap-4 text-white mt-[18px]">
              {/* {techArray?.map((tech, index) => (
                <span key={index} className="">
                  {tech}
                </span>
              ))} */}
              #React, #Next, #TS, #Mongoose
            </div>
            <div className="pt-2">
              <Link href={`/our-products/${item?.id}`}>
                <p className="underline text-[#7579FA] text-[16px] font-medium">
                  Check Full Details
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHoverEffect;
