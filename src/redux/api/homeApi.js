import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Query for fetching all BlogCategory
    getAllTopCategory: build.query({
      query: () => ({
        url: `/product-top-category`,
        method: "GET",
      }),
      providesTags: [tagTypes.home],
    }),
    getAllProducts: build.query({
      query: (data) => ({
        url: `/products/get-product-by-category?product-category-id=${data}`,
        method: "GET",
      }),
      providesTags: [tagTypes.home],
    }),
    createContactUs: build.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.home],
    }),
    // get here banner data by page
    getSinglePageHereBannerData: build.query({
      query: (data) => ({
        url: `/hero-banner/hero-banner-by-link?link=${data}`,
        method: "GET",
      }),
      providesTags: [tagTypes.home],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllTopCategoryQuery,
  useCreateContactUsMutation,
  useGetSinglePageHereBannerDataQuery
} = homeApi;
