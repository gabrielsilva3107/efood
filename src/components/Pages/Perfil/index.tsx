import Produtos from '../../Produtos'
import Footer from '../../Footer'
import Headerperfil from '../../Header'
import { Fundo } from './styles'
import HeaderApresentacao from '../../HeaderApresentacao'
import { useGetFeatureRestauranteQuery } from '../../../services/api'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading } = useGetFeatureRestauranteQuery(id!)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (restaurant) {
    return (
      <Fundo>
        <Headerperfil />
        <HeaderApresentacao foods={restaurant} />
        <Produtos cardapio={restaurant ? [restaurant] : []} />
        <Footer />
      </Fundo>
    )
  }

  return <h4>provalvelmente a pagina nao existe</h4>
}

export default Perfil
