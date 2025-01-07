import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'

export const Restaurante = styled.div`
  background-color: ${Cores.Branco};
  border: 1px solid ${Cores.VermelhoCoral};
  height: 398px;
  width: 472px;
  margin-bottom: 56px;
`

export const Botao = styled.div<Props>`
  background-color: ${Cores.VermelhoCoral};
  color: ${Cores.CremePessego};
  padding: 8px 6px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-left: 6px;

  text-decoration: none;
  height: 24px;
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Imagemrestaurante = styled.div<Props>`
  height: 217px;
  width: 472px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  .botoes_imagem_restaurante {
    padding: 16px;
  }
`

export const Descricao = styled.div`
  height: 181px;
  width: 472px;
  display: flex;
  flex-direction: column;
  height: 100%;
  .restaurante_nota {
    display: flex;
    justify-content: space-between;
    margin: 8px;
  }
`

export const Paragrafo = styled.p<Props>`
  color: ${Cores.VermelhoCoral};
  font-size: ${(props) => (props.size === 'big' ? '18px' : '14px')};
  font-weight: ${(props) => (props.size === 'big' ? '700' : '400')};

  p {
    margin: 16px 8px 8px;
  }
`

export const Nota = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    height: 20px;
    width: 21px;
  }
`
