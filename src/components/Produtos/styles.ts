import styled from 'styled-components'
import { Cores } from '../../styles'

export const Itens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 60px;
  margin-bottom: 80px;
`

export const Item = styled.div`
  background-color: ${Cores.VermelhoCoral};
  padding-bottom: 1px;
  margin-bottom: 30px;
  h1 {
    color: ${Cores.CremePessego};
    font-weight: 700;
    font-size: 16px;
    margin: 8px;
  }
  p {
    color: ${Cores.CremePessego};
    margin: 8px;
  }

  div {
    background-color: ${Cores.CremePessego};
    margin: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: center;
    cursor: pointer;
    a {
      color: ${Cores.VermelhoCoral};
      font-weight: 700;
    }
  }
  img {
    width: 304px;
    height: 167px;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
  }
`
