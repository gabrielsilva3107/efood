import styled from 'styled-components'
import { Cores } from '../../styles'
import lixeiro from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  background-color: ${Cores.VermelhoCoral};
  padding-top: 32px;

  padding-left: 8px;
  padding-right: 8px;
  z-index: 1;
`

export const Valores = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: ${Cores.CremePessego};
`

export const Button = styled.div`
  background-color: ${Cores.CremePessego};
  color: ${Cores.VermelhoCoral};
  width: 344px;
  height: 24px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${Cores.CremePessego};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px;
  }

  h3 {
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 18px;
    color: ${Cores.VermelhoCoral};
  }

  span {
    font-size: 14px;
    color: ${Cores.VermelhoCoral};
  }

  button {
    background-image: url(${lixeiro});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
