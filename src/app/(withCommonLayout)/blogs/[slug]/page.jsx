import BlogDetails from "../../BlogDetails/BlogDetails";

export async function generateMetadata({ params }) {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${params?.slug}`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch blog with id: ${params?.id}`);
    }
    let blog = await response.json();
    // Extract necessary fields for SEO
    const name =
      blog?.data?.name + " ||   " + " Asian it i inc" ||
      "blog Details || Asian it i inc";
    const description =
      blog?.data?.meta_data ||
      blog?.data?.sort_description ||
      blog?.data?.meta_key ||
      "blog .";
    const image = `${process.env.NEXT_PUBLIC_IMAGE_URL}${blog?.data?.photo}`;
    return {
      title: name,
      description: description,
      openGraph: {
        title: name,
        description: description,
        images: [
          {
            url: image,
            alt: name,
          },
        ],
        type: "article", // or "article", "object", etc.
      },
    };
  } catch (error) {
    console.error("Error fetching product metadata:", error);
    return {
      title: "Product Details",
      description: "Detailed view of the product.",
    };
  }
}

const BlogDetailsPage = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${params?.slug}`,
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
