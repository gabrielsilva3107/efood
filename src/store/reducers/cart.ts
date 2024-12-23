import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurante from '../../models/Restaurante'

type CartState = {
  items: Restaurante[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante>) => {
      const game = state.items.find((items) => items.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O item ja esta no carrinho')
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
    }
  }
})

cartSlice.actions.add
export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
