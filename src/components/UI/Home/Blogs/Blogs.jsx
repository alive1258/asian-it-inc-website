import React from "react";
import BlogSection from "./BlogSection";
import Link from "next/link";
import ButtonOutline from "../../Button/ButtonOutline";

const Blogs = () => {
  return (
    <>
      <div className="bg-[#E4E5FE]">
        <div className="bg-[url('/assets/images/blogBg.png')] bg-cover bg-no-repeat py-16">
          <div className="container">
            <div className="flex justify-center pt-14 ">
              <div>
                <p className="text-[20px] pt-2 font-normal text-center">
                  our Blog
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
                  The Latest from our Blog
                </h1>
                <p className="text-[20px] pt-2 font-normal text-center w-[490px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore.
                </p>
              </div>
            </div>
            <div>
              {/* <BlogSection blogs={blogs} /> */}
              <div className="mt-16">
                <Link href="/blogs">
                  <ButtonOutline content="More Blogs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
