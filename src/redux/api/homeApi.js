import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Query for fetching all BlogCategory
    getAllOurWorks: build.query({
      query: () => ({
        url: `/our-works`,
        method: "GET",
      }),
      providesTags: [tagTypes.home],
    }),
  }),
});

export const { useGetAllOurWorksQuery } = homeApi;
