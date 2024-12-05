import { Logo } from '../../styles'
import { HeaderBar, Title } from './styles'
import efood from '../../assets/images/efood.png'

const Hero = () => (
  <HeaderBar>
    <Logo src={efood}></Logo>
    <Title>
      Viva experiências gastronômicas <br></br>no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Hero
