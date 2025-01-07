import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Button, CartContainer, Overlay, Sidebar, Textos } from './styles'
import { closeProcessadoPedido } from '../../store/reducers/cart'

const Confirmacao = () => {
  const { isPedidoProcessadoOpen } = useSelector(
    (state: RootReducer) => state.cart
  )
  const orderId = useSelector((state: RootReducer) => state.cart.orderId)
  const dispatch = useDispatch()
  const fecharConfirmacao = () => {
    dispatch(closeProcessadoPedido())
  }

  return (
    <>
      <CartContainer
        className={isPedidoProcessadoOpen ? 'is-open-confirmaco' : ''}
      >
        <Overlay onClick={fecharConfirmacao} />
        <Sidebar>
          <h3>Pedido realizado - {orderId} </h3>
          <div>
            <Textos>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Textos>
          </div>
          <Button onClick={fecharConfirmacao}>Concluir</Button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Confirmacao
