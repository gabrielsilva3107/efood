import Apresentacao from '../Apresentacao'

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
  foods: Restaurante | null
}

const HeaderApresentacao = ({ foods }: Props) => {
  if (!foods) {
    return null
  }

  return (
    <Apresentacao
      tipo={foods.tipo}
      nomerestaurante={foods.titulo}
      imagem={foods.capa}
    />
  )
}

export default HeaderApresentacao
