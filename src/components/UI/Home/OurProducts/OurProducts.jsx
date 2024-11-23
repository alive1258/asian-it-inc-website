"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductHoverEffect from "./ProductHoverEffect";
import Link from "next/link";
import {
  useGetAllProductsQuery,
  useGetAllTopCategoryQuery,
} from "@/redux/api/homeApi";

const OurProducts = () => {
  const [category, setCategory] = useState(null);
  const { data: topCategories, error } = useGetAllTopCategoryQuery();
  const { data: allProducts, refetch } = useGetAllProductsQuery(category);
  const handleOnclick = (item) => {
    setCategory(item);
    refetch();
  };

  return (
    <>
      {/* <div className="bg-gradient-to-r from-black from-10% via-gray-950 via-15% to-gray-900 to-55% "> */}
      <div>
        <div className="bg-gradient-to-r from-black to-gray-900">
          <div className="bg-[url('/assets/images/productBg.png')] bg-cover bg-no-repeat ">
            <div className="container text-white">
              <div className="flex justify-center pt-14 ">
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
                    Our Products
                  </h1>
                  <p className="text-[20px] pt-2 font-normal">
                    We take digital experience to the next level
                  </p>
                </div>
              </div>

              <div className="pt-16 ">
                <div className="flex justify-center ">
                  <ul className="flex space-x-10 flex-wrap  font-medium ">
                    <li
                      onClick={() => handleOnclick(null)}
                      className={` ${
                        category == null ? " text-primary-base " : ""
                      } text-sm md:text-[20px] cursor-pointer `}
                    >
                      All
                    </li>
                    {topCategories?.data?.map((item) => (
                      <li
                        onClick={() => handleOnclick(item.id)}
                        className={` ${
                          category === item?.id ? "text-primary-base" : ""
                        } text-sm md:text-[20px] cursor-pointer`}
                        key={item?.id}
                      >
                        {item?.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                  {allProducts?.data?.map((item) => (
                    <div key={item?.id} className="relative  group">
                      <Image
                        className="h-[296px] rounded-lg object-cover w-full "
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item?.photo}`}
                        height={296}
                        width={413}
                        alt="product"
                      />
                      <ProductHoverEffect item={item} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center py-16">
                  <Link href="/our-products">
                    <button className="outline-btn">View More Products</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
