import styled from 'styled-components'
import { Cores } from '../../styles'
import garfofaca from '../../assets/images/garfofaca.png'

export const HeaderBar = styled.header`
  display: flex;
  height: 384px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${garfofaca});
  background-size: cover;
`
export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding-bottom: 64px;
  color: ${Cores.VermelhoCoral};
  font-weight: 900;
`
