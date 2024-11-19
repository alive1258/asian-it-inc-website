import BlogCard from "./BlogCard";

const BlogSection = ({ blogs }) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {blogs?.slice(0, 3).map((blog) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </section>
    </>
  );
};

export default BlogSection;
