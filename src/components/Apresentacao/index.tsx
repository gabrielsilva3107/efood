import { Fundo, Texto, Textos } from './styles'

export type Props = {
  size?: 'small' | 'big'
  tipo?: string
  nomerestaurante?: string
  imagem?: string
}

const Apresentacao = ({ tipo, nomerestaurante, imagem }: Props) => (
  <Fundo imagem={imagem}>
    <Textos>
      <Texto>{tipo}</Texto>
      <Texto size="big">{nomerestaurante}</Texto>
    </Textos>
  </Fundo>
)

export default Apresentacao
