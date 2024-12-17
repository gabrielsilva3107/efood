import { useState } from 'react'
import { ContainerModal, Item, Modal } from './styles'
import fechar from '../../assets/images/close.png'

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
              <span className="adicionar">
                Adicionar ao carrinho - R$ {preco}
              </span>
            </div>
          </div>
        </ContainerModal>
      </Modal>
    </>
  )
}

export default ItemProduto
