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
  console.log(blogsData, "blogsDatablogsDatablogsData")
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
                <p className=" text-sm md:text-[18px] pt-2 font-normal text-center w-[490px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt dolore.
                </p>
              </div>
            </div>
            <div>
              <BlogSection blogs={blogsData} />
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
