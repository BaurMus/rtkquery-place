import { api } from "./api";

export const createPlaceApi = api.injectEndpoints({
  endpoints: builder => ({
    createPlace: builder.mutation({
      query: (place) => ({
        url: '',
        body: place,
        method: 'POST'
      })
    })
  })
})

export const {useCreatePlaceMutation} = createPlaceApi;