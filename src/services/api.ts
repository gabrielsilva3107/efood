import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurante from '../models/Restaurante'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHomeRestaurantePage: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureRestaurante: builder.query<Restaurante | null, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeatureRestauranteQuery, useGetHomeRestaurantePageQuery } =
  api

export default api
