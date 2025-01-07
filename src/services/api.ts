import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurante from '../models/Restaurante'

export type PurchaseResponse = {
  orderId: string
}
export type Product = {
  id: number
  price: number
}

export type DeliveryAddress = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

export type Delivery = {
  receiver: string
  address: DeliveryAddress
}

type Payment = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

type PurchasePayload = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeatureRestauranteQuery,
  useGetHomeRestaurantePageQuery,
  usePurchaseMutation
} = api

export default api
