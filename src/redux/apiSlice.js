'use client';

import { baseUriBackend } from '@/utils/url';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUriBackend,
    // credentials: 'include',

    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Product','Contact','Service','Team'],

  endpoints: () => ({}),
});
