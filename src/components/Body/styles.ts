import styled from 'styled-components'
import { Cores } from '../../styles'

export const Listagem = styled.div`
  background-color: ${Cores.Creme};
  padding-top: 77px;
  padding-bottom: 77px;
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
`
