import { CREATE_CONTACT, DELETE_CONTACT, GET_ALL_CONTACT } from '@/utils/url';
import { apiSlice } from '../apiSlice';

export const contactAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all team members with pagination and search
    getContact: builder.query({
      query: () => ({
        url: GET_ALL_CONTACT,
        method: 'GET',
      }),
      providesTags: ['Contact'],
    }),

    // Create a new team member
    createContact: builder.mutation({
      query: (data) => ({
        url: CREATE_CONTACT,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        // url: apiPoints.services.deleteServiceById(id),
        url: `${DELETE_CONTACT}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useCreateContactMutation, useGetContactQuery, useDeleteContactMutation } =
  contactAPi;
