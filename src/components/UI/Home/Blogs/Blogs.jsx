import React from "react";
import Link from "next/link";
import ButtonOutline from "../../Button/ButtonOutline";
import BlogSection from "./BlogSection";
const Blogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds (ISR behavior)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const blogsData = data?.data || [];
  return (
    <>
      <div className="bg-[#E4E5FE]">
        <div className="bg-[url('/assets/images/blogBg.png')] bg-cover bg-no-repeat md:py-16 py-6">
          <div className="container">
            <div className="flex justify-center pt-14 ">
              <div>
                <p className="md:text-[20px] text-[18px] uppercase pt-2 font-normal text-center">
                  Our Blog
                </p>
                <h1
                  className="md:text-[40px] text-[30px] font-semibold text-center"
                  style={{
                    background:
                      "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  The Latest from our Blog
                </h1>
                <p className=" text-sm md:text-[18px] pt-2 font-normal text-center w-[490px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore.
                </p>
              </div>
            </div>
            <div>
              <BlogSection blogs={blogsData} />
              <div className="mt-8">
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
