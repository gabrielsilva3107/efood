import { Fundo, Texto, Textos } from './styles'

export type Props = {
  size?: 'small' | 'big'
}

const Apresentacao = () => (
  <Fundo>
    <Textos>
      <Texto>italiana</Texto>
      <Texto size="big">La Dolce Vita Trattoria</Texto>
    </Textos>
  </Fundo>
)

export default Apresentacao
