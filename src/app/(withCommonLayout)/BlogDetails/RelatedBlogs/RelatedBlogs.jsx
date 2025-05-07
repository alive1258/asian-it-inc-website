import BlogCard from "@/components/UI/Home/Blogs/BlogCard";
import { MdOutlineUpdate } from "react-icons/md";

const RelatedBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const blogsData = data?.data || [];
  return (
    <>
      <div className="flex items-center gap-3">
        <MdOutlineUpdate className="text-3xl text-primary-base" />
        <h1 className="text-[#4b4f56] text-[32px] font-medium">Latest Blogs</h1>
      </div>
      {/* blogs  */}
      <div className="mt-[28px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {blogsData?.slice(0, 3).map((blog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedBlogs;
