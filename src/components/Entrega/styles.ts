import styled from 'styled-components'
import { Cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open-cartentrega {
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

  h3 {
    font-size: 16px;
    color: ${Cores.CremePessego};
  }
`

export const Button = styled.button`
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

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    color: ${Cores.CremePessego};
    margin-bottom: 8px;
    margin-top: 8px;
    display: block;
    font-weight: bold;
  }

  input {
    width: 100%;
    background-color: ${Cores.CremePessego};
    border: 1px solid ${Cores.CremePessego};
    height: 32px;
  }
`

export const CepNumero = styled.div`
  display: flex;
  gap: 34px;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
