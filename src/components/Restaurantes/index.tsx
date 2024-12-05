import { Link } from 'react-router-dom'
import {
  Botao,
  Descricao,
  Imagemrestaurante,
  Nota,
  Paragrafo,
  Restaurante
} from './styles'
import estrela from '../../assets/images/estrela.png'

export type Props = {
  size?: 'small' | 'big'
  children?: React.ReactNode
  descricao?: string
  nota?: string
  nome?: string
  image?: string
  italia?: boolean
}

export const Fragmento = ({ size = 'small', children }: Props) => (
  <Paragrafo size={size}>{children}</Paragrafo>
)

const Atributos = ({ italia = true }: Props) => {
  return (
    <>
      {italia ? (
        <Botao>Italiana</Botao>
      ) : (
        <>
          <Botao>Destaque da semana</Botao>
          <Botao>Japonesa</Botao>
        </>
      )}
    </>
  )
}

const Restaurantes = ({ nome, nota, descricao, image, italia }: Props) => (
  <Restaurante>
    <Imagemrestaurante image={image}>
      <div className="botoes_imagem_restaurante">
        <Atributos italia={italia}></Atributos>
      </div>
    </Imagemrestaurante>
    <Descricao>
      <div className="restaurante_nota">
        <Fragmento size="big">{nome} </Fragmento>
        <Nota>
          <Fragmento size="big">{nota}</Fragmento>
          <img src={estrela} alt="" />
        </Nota>
      </div>
      <Fragmento>
        <p>{descricao}</p>
      </Fragmento>
      <Link to="/perfil">
        <Botao>Saiba mais</Botao>
      </Link>
    </Descricao>
  </Restaurante>
)

export default Restaurantes
