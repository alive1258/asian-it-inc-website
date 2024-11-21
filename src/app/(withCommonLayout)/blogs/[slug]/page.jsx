import BlogDetails from "../../BlogDetails/BlogDetails";

const BlogDetailsPage = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${params?.slug}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const productData = await res.json();

    return (
      <>
        <BlogDetails blogsData={productData?.data} />
      </>
    );
  } catch {
    return null;
  }
};

export default BlogDetailsPage;
