import Body from '../../Body'
import Footer from '../../Footer'
import Hero from '../../Hero'
import { useGetHomeRestaurantePageQuery } from '../../../services/api'

const Home = () => {
  const { data: restaurant = [], isLoading } = useGetHomeRestaurantePageQuery()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Hero></Hero>
      <Body foods={restaurant}></Body>
      <Footer></Footer>
    </>
  )
}

export default Home
