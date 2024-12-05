import { Fragmento } from '../Restaurantes'
import { Rodape, Rodapelinks } from './styles'
import efood from '../../assets/images/efood.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Rodape>
    <img src={efood} alt="Logo efood" />
    <Rodapelinks>
      <li>
        <img src={instagram} alt="" />
      </li>
      <li>
        <img src={facebook} alt="" />
      </li>
      <li>
        <img src={twitter} alt="" />
      </li>
    </Rodapelinks>
    <Fragmento>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </Fragmento>
  </Rodape>
)

export default Footer
