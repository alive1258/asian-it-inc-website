import ProductsDetailsSection from "@/components/UI/Home/OurProducts/ProductsDetailsSection";
import React from "react";

const page = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${params?.slug}`,
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
