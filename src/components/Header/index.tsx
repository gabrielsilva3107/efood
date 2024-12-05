import { Link } from 'react-router-dom'
import { Fragmento } from '../Restaurantes'
import { Header } from './styles'
import efood from '../../assets/images/efood.png'

const Headerperfil = () => (
  <Header>
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Fragmento size="big">Restaurantes</Fragmento>
      </Link>
      <img src={efood} />
      <Fragmento size="big"> 0 Produto(s) no carrinho</Fragmento>
    </div>
  </Header>
)

export default Headerperfil
