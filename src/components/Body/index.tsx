import { Container } from '../../styles'
import Restaurantes from '../Restaurantes'
import { Items, Listagem } from './styles'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const Body = () => {
  return (
    <Listagem>
      <Container>
        <Items>
          <div>
            <Restaurantes
              nome="Hioki Sushi"
              descricao="Peça já o melhor da culinária japonesa no conforto da sua casa!
                            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida,
                            embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar
                            com nosso delivery!"
              nota="4.9"
              image={sushi}
              italia={false}
            />
            <Restaurantes
              nome="La Dolce Vita Trattoria"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                            tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              nota="4.6"
              image={macarrao}
            />
            <Restaurantes
              nome="La Dolce Vita Trattoria"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                            tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              nota="4.6"
              image={macarrao}
            />
          </div>
          <div>
            <Restaurantes
              nome="La Dolce Vita Trattoria"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                            tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              nota="4.6"
              image={macarrao}
            />
            <Restaurantes
              nome="La Dolce Vita Trattoria"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                            tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              nota="4.6"
              image={macarrao}
            />
            <Restaurantes
              nome="La Dolce Vita Trattoria"
              descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
                            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
                            tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              nota="4.6"
              image={macarrao}
            />
          </div>
        </Items>
      </Container>
    </Listagem>
  )
}

export default Body
