import { useEffect, useState } from 'react'
import Body, { Restaurante } from '../../Body'
import Footer from '../../Footer'
import Hero from '../../Hero'

const Home = () => {
  const [Restaurant, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])
  return (
    <>
      <Hero></Hero>
      <Body foods={Restaurant}></Body>
      <Footer></Footer>
    </>
  )
}

export default Home
