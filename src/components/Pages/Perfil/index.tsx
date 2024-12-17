import Produtos from '../../Produtos'
import Footer from '../../Footer'
import Headerperfil from '../../Header'
import { Fundo } from './styles'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../Body'
import { useParams } from 'react-router-dom'
import HeaderApresentacao from '../../HeaderApresentacao'

const Perfil = () => {
  const [produt, setProduto] = useState<Restaurante[]>([])
  const [restaurant, setRestaurant] = useState<Restaurante | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProduto([res])
        setRestaurant(res)
      })
  }, [id])

  return (
    <Fundo>
      <Headerperfil />
      <HeaderApresentacao foods={restaurant}></HeaderApresentacao>
      <Produtos cardapio={produt} />
      <Footer />
    </Fundo>
  )
}

export default Perfil
