import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IPlace } from '../../types/places/places.type';

const API_URL = 'http://localhost:4300/places';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Places'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: builder => ({
    getPlaces: builder.query<IPlace[], string>({
      query: (searchPlaceQuery) => `?_sort=id&_order=desc&q=${searchPlaceQuery}`,
    })
  })
})

export const {useGetPlacesQuery} = api;