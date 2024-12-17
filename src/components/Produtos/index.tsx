import ItemProduto from '../ItemProduto'
import { Container } from '../../styles'
import { Itens } from './styles'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}
type Props = {
  cardapio: Restaurante[]
}

const Produtos = ({ cardapio }: Props) => (
  <Container>
    <Itens>
      {cardapio.map((restaurante) =>
        restaurante.cardapio.map((produto) => (
          <ItemProduto
            key={produto.id}
            id={produto.id}
            imagem={produto.foto}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            porcao={produto.porcao}
          />
        ))
      )}
    </Itens>
  </Container>
)

export default Produtos
