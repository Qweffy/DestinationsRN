import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { normalize } from 'normalizr'
import { destinationListSchema } from '../normalizationSchemas'

export const destinationsApi = createApi({
  reducerPath: 'destinationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-int.stay-app.com/v1/establishments/' }),
  endpoints: (builder) => ({
    getDestinations: builder.query({
      query: () => `destinations?apikey=4ef1c773b26fea71a6638c948dab3bb1`,
      transformResponse: (response: any) => normalize(response.data, destinationListSchema),
    }),
  }),
})

export const { useGetDestinationsQuery } = destinationsApi
