import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:4300/places';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Places'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: builder => ({
    getPlaces: builder.query({
      query: () => ''
    })
  })
})

export const {useGetPlacesQuery} = api;