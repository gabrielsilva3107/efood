import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurante from '../../models/Restaurante'

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

type Delivery = {
  receiver: string
  address: Address
}

type PaymentInfo = {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

type CartState = {
  orderId: string
  items: Restaurante[]
  products: Restaurante[]
  isOpen: boolean
  isEntregaOpen: boolean
  isPagamentoOpen: boolean
  isPedidoProcessadoOpen: boolean
  delivery: Delivery | null
  payment: PaymentInfo | null
}

const initialState: CartState = {
  orderId: '',
  items: [],
  products: [],
  isOpen: false,
  isEntregaOpen: false,
  isPagamentoOpen: false,
  isPedidoProcessadoOpen: false,
  delivery: null,
  payment: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante>) => {
      const game = state.items.find((items) => items.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
        state.products.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      )
    },
    openEntrega: (state) => {
      state.isEntregaOpen = true
    },
    closeEntrega: (state) => {
      state.isEntregaOpen = false
    },
    openPagamento: (state) => {
      state.isPagamentoOpen = true
    },
    closePagamento: (state) => {
      state.isPagamentoOpen = false
    },
    openProcessadoPedido: (state) => {
      state.isPedidoProcessadoOpen = true
    },
    closeProcessadoPedido: (state) => {
      state.isPedidoProcessadoOpen = false
    },
    setDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload
    },
    setPayment: (state, action: PayloadAction<PaymentInfo>) => {
      state.payment = action.payload
    },
    setProducts(state, action) {
      state.products = action.payload
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openEntrega,
  closeEntrega,
  openPagamento,
  closePagamento,
  openProcessadoPedido,
  closeProcessadoPedido,
  setDelivery,
  setPayment,
  setProducts,
  setOrderId
} = cartSlice.actions

export default cartSlice.reducer
