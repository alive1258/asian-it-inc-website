import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for login
    signIn: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    verifyOTP: builder.mutation({
      query: (data) => ({
        url: "/auth/verifyOTP",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    resendOTP: builder.mutation({
      query: (data) => ({
        url: `/auth/resendOTP`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSignInMutation,
  useForgetPasswordMutation,
  useResendOTPMutation,
  useVerifyOTPMutation,
  useResetPasswordMutation,
} = authApi;
