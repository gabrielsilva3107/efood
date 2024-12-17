import { Container } from '../../styles'
import Restaurantes from '../Restaurantes'
import { Items, Listagem } from './styles'

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
  foods: Restaurante[]
}

const Body = ({ foods }: Props) => {
  return (
    <Listagem>
      <Container>
        <Items>
          {foods.map((foods) => (
            <Restaurantes
              key={foods.id}
              id={foods.id}
              nome={foods.titulo}
              descricao={foods.descricao}
              nota={foods.avaliacao}
              image={foods.capa}
            ></Restaurantes>
          ))}
        </Items>
      </Container>
    </Listagem>
  )
}

export default Body
