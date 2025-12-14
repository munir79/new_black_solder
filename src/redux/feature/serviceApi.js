import { CREATE_SERVICE, DELETE_SERVICE, GET_SERVICE, GET_SINGLE_SERVICE, UPDATE_SERVICE } from "@/utils/url";
import { apiSlice } from "../apiSlice";



export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getService: builder.query({
      // Accept page, limit, and search as parameters
      query: ({ page = 1, limit = 10, search = '' }) => ({
        url: GET_SERVICE,
        method: 'GET',
        params: { page, limit, search },
      }),
      providesTags: ['Service'],
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: CREATE_SERVICE,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Service'],
    }),
    getServiceById: builder.query({
      query: (id) => ({
        // url: apiPoints.services.getServiceById(id),
        url: `${GET_SINGLE_SERVICE}/${id}`,
        method: 'GET',
      }),
      providesTags: ['Service'],
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => ({
        // url: `${apiPoints.services.updateServiceById(id)}`,
           url: `${UPDATE_SERVICE}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Service'],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        // url: apiPoints.services.deleteServiceById(id),
           url: `${DELETE_SERVICE}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Service'],
    }),
  }),
});

export const {
  useGetServiceQuery,
  useCreateServiceMutation,
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
