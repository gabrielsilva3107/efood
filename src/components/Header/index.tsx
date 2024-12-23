import { Link } from 'react-router-dom'
import { Fragmento } from '../Restaurantes'
import { Header } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import efood from '../../assets/images/efood.png'

const Headerperfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header>
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Fragmento size="big">Restaurantes</Fragmento>
        </Link>
        <img src={efood} />
        <Fragmento onClick={openCart} size="big">
          {' '}
          {items.length} Produto(s) no carrinho
        </Fragmento>
      </div>
    </Header>
  )
}

export default Headerperfil
