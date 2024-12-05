import styled from 'styled-components'
import { Cores } from '../../styles'

export const Rodape = styled.footer`
  height: 298px;
  background-color: ${Cores.CremePessego};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 125px;
    height: 57.5px;
    margin-bottom: 40px;
  }

  p {
    font-size: 10px;
    width: 480px;
    text-align: center;
  }
`

export const Rodapelinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    padding: 4px;

    img {
      height: 24px;
      width: 24px;
    }
  }
`
