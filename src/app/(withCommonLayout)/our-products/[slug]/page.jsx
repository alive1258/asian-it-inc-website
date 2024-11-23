import ProductsDetailsSection from "@/components/UI/Home/OurProducts/ProductsDetailsSection";
import React from "react";

export async function generateMetadata({ params }) {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/slug/${params?.slug}`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch blog with id: ${params?.id}`);
    }
    let product = await response.json();
    // Extract necessary fields for SEO
    const name =
      product?.data?.name + " |" + " Asian it i inc" ||
      "product Details || Asian it i inc";
    const description =
      product?.data?.mate_data ||
      product?.data?.overview ||
      product?.data?.mate_key ||
      "product description";
    const image = `${process.env.NEXT_PUBLIC_IMAGE_URL}${product?.data?.photo}`;
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

const page = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/slug/${params?.slug}`,
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
        <ProductsDetailsSection productData={productData?.data} />
      </>
    );
  } catch {
    return null;
  }
};

export default page;
