import ProductPriceSection from "./ProductPriceSection";

const ProductPrice = async ({ limit = 10 }) => {
  try {
    //fetched all service products
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/our-product-price`
    );
    // specify the name
    const servicesData = await res?.json();
    const productPrice = servicesData?.data;
    // const meta = servicesData?.data?.meta;

    return (
      <>
        <div className="container mx-auto py-14">
          <div className="flex justify-center  ">
            <div>
              <h1
                className="text-[40px] font-semibold text-center"
                style={{
                  background:
                    "linear-gradient(91deg, #A26AFF 0.69%, #3238F8 99.63%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Product Price
              </h1>
              <p className="text-[20px] pt-2 font-normal text-center w-[490px]">
                We take digital experience to the next level
              </p>
            </div>
          </div>
          <ProductPriceSection prices={productPrice} />
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default ProductPrice;
