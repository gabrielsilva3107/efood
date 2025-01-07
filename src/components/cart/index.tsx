import {
  Button,
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  Valores
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, openEntrega } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const abrindoEntrega = () => (dispatch(openEntrega()), dispatch(close()))
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items
      .reduce((acumulador, item) => {
        return (
          acumulador +
          (item.cardapio
            ? item.cardapio.reduce(
                (subtotal, produto) => subtotal + produto.preco,
                0
              )
            : 0)
        )
      }, 0)
      .toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) =>
            item.cardapio?.map((produto) => (
              <CartItem key={produto.id}>
                <img src={produto.foto} alt={produto.nome} />
                <div>
                  <h3>{produto.nome}</h3>
                  <span>
                    R${' '}
                    {produto.preco.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </span>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  type="button"
                ></button>
              </CartItem>
            ))
          )}
        </ul>
        <Valores>
          <p>Valor total</p>
          <p>R$ {getTotalPrice()}</p>
        </Valores>
        {items.length === 0 && (
          <small style={{ color: 'red', fontWeight: 'bold' }}>
            Adicione pelo menos um item ao carrinho para continuar.
          </small>
        )}
        <Button onClick={abrindoEntrega} disabled={items.length === 0}>
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
