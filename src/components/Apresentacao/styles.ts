import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const Fundo = styled.div<Props>`
  background-image: url(${(props) => props.imagem});
  background-position: center;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1080px;
  height: 280px;
  margin: 0 auto;
`
export const Texto = styled.p<Props>`
  font-size: 32px;
  font-weight: ${(Props) => (Props.size === 'big' ? '900' : '100')};
  color: ${Cores.Branco};
  margin: 22px;
`
