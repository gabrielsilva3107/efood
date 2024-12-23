import { useState } from 'react'
import { ContainerModal, Item, Modal } from './styles'
import fechar from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Restaurante from '../../models/Restaurante'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

type Props = {
  id?: number
  imagem?: string
  nome?: string
  descricao?: string
  preco?: number
  porcao?: string
}

const ItemProduto = ({ nome, id, imagem, descricao, preco, porcao }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    const produto: Restaurante = {
      id: id || 0,
      titulo: nome || '',
      descricao: descricao || '',
      capa: imagem || '',
      destacado: false,
      tipo: 'Tipo do Restaurante',
      avaliacao: 0,
      produtos: [],
      cardapio: [
        {
          foto: imagem || '',
          preco: preco || 0,
          id: id || 0,
          nome: nome || '',
          descricao: descricao || '',
          porcao: porcao || ''
        }
      ]
    }

    dispatch(add(produto))
    dispatch(open())
  }
  return (
    <>
      <Item key={id}>
        <img src={imagem} alt={nome} />
        <h1>{nome}</h1>
        <p>{descricao}</p>
        <div onClick={() => setModalEstaAberto(true)}>
          <a>Adicionar ao Carrinho</a>
        </div>
      </Item>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ContainerModal>
          <div>
            <img
              className="img_fechar"
              onClick={() => setModalEstaAberto(false)}
              src={fechar}
            />
            <img className="imagem" src={imagem} alt={nome} />
            <div className="detalhes">
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>{porcao}</p>
              <span onClick={addToCart} className="adicionar">
                Adicionar ao carrinho - {formataPreco(preco || 0)}
              </span>
            </div>
          </div>
        </ContainerModal>
      </Modal>
    </>
  )
}

export default ItemProduto
