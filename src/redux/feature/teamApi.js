import {
  CREATE_TEAM_MEMBER,
  DELETE_TEAM_MEMBER,
  GET_SINGLE_TEAM_MEMBER,
  GET_TEAM_MEMBERS,
  UPDATE_TEAM_MEMBER,
} from '@/utils/url';

import { apiSlice } from '../apiSlice';

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all team members with pagination and search
    getTeamMembers: builder.query({
      query: ({ page = 1, limit = 10, search = '', designation = '' }) => ({
        url: GET_TEAM_MEMBERS,
        method: 'GET',
        params: { page, limit, search, designation },
      }),
      providesTags: ['Team'],
    }),

    // Create a new team member
    createTeamMember: builder.mutation({
      query: (data) => ({
        url: CREATE_TEAM_MEMBER,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Team'],
    }),

    // Get single team member by ID
    singleTeamMember: builder.query({
      query: (id) => ({
        url: `${GET_SINGLE_TEAM_MEMBER}/${id}`,
        method: 'GET',
      }),
      providesTags: ['Team'],
    }),

    // Update team member
    updateTeamMember: builder.mutation({
      query: ({ id, data }) => ({
        url: `${UPDATE_TEAM_MEMBER}/${id}`,
        method: 'PUT',
        body: data,
      }),
      providesTags: ['Team'],
    }),

    // Delete team member
    deleteTeamMember: builder.mutation({
      query: (id) => ({
        url: `${DELETE_TEAM_MEMBER}/${id}`,
        method: 'DELETE',
      }),
      providesTags: ['Team'],
    }),
  }),
});

export const {
  useGetTeamMembersQuery,
  useSingleTeamMemberQuery,
  useUpdateTeamMemberMutation,
  useCreateTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = teamApi;
