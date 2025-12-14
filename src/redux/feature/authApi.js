import { SIGN_IN, SIGN_UP } from "@/utils/url";
import { apiSlice } from "../apiSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: SIGN_IN,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url:SIGN_UP,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useSignupMutation,useLoginMutation} = authApi;