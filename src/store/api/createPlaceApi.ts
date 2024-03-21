import { IPlaceData } from "../../types/places/places.type";
import { api } from "./api";

export const createPlaceApi = api.injectEndpoints({
  endpoints: builder => ({
    createPlace: builder.mutation<null, IPlaceData>({
      query: (place) => ({
        url: '',
        body: place,
        method: 'POST'
      }),
      invalidatesTags: [{
        type: 'Places'
      }]
    })
  })
})

export const {useCreatePlaceMutation} = createPlaceApi;