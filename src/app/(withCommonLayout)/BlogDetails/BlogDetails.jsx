import Image from "next/image";
import RelatedBlogs from "./RelatedBlogs/RelatedBlogs";

// Assuming this is a Next.js Page component
const BlogDetails =  ({ blogsData }) => {
  return (
    <>
      <div className="">
        <Image
          className="max-h-[480px] w-full object-fill"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${blogsData?.photo}`}
          width={1280}
          height={600}
          alt="blog details"
        />
      </div>
      <div className="container  py-[56px]">
        {/* Blog Image Section */}
        <button className=" bg-[#A0A3FC]  px-6 py-2 text-white rounded-full"> {blogsData?.blogCategory?.name} </button>
        {/* Blog Content */}
        <div className="mt-[32px]">
          <h1 className="text-[20px] font-semibold ">{blogsData?.name}</h1>
          <div className="mt-5">
            <div
              dangerouslySetInnerHTML={{ __html: blogsData?.description }}
            ></div>
          </div>
        </div>

        {/* Related Blogs Section */}
        <RelatedBlogs />
      </div>
    </>
  );
};

export default BlogDetails;
