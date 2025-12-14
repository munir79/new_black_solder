import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_SINGLE_PRODUCT, UPDATE_PRODUCT } from "@/utils/url";
import { apiSlice } from "../apiSlice";


export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
   
      getProducts: builder.query({
      query: ({ page = 1, limit = 10, search = '' }) => ({
        url: GET_PRODUCT,
        method: 'GET',
        params: { page, limit, search },
      }),
      providesTags: ['Product'],
    }),

    
    createProduct: builder.mutation({
      query: (data) => ({
        url:CREATE_PRODUCT,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
   singleProduct: builder.query({
      query: (id) => ({
        url: `${GET_SINGLE_PRODUCT}/${id}`,
        // url: apiPoints.products.getProductById(id),
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${UPDATE_PRODUCT}/${id}`,
        // url: apiPoints.products.updateProductById(id),
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        // url: apiPoints.products.deleteProductById(id),
        url: `${DELETE_PRODUCT}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery,useCreateProductMutation,useSingleProductQuery,useUpdateProductMutation,useDeleteProductMutation} = productApi;
