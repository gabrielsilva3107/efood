import styled from 'styled-components'
import { Cores } from '../../styles'

export const Item = styled.div`
  background-color: ${Cores.VermelhoCoral};
  padding-bottom: 1px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

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
    margin-top: auto;

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

export const Modal = styled.div`
  position: fixed;
  div {
    width: 1024px;
    height: 344px;
    display: flex;
  }
  display: none;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ContainerModal = styled.div`
  background-color: ${Cores.VermelhoCoral};
  position: relative;
  padding: 32px;

  .img_fechar {
    height: 16px;
    width: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .imagem {
    height: 280px;
    width: 280px;
  }

  .detalhes {
    h4 {
      font-size: 18px;
      color: ${Cores.CremePessego};
    }

    p {
      font-size: 14px;
      color: ${Cores.CremePessego};
    }

    span {
    }
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 24px;
    margin-right: 54px;
  }

  .adicionar {
    background-color: ${Cores.CremePessego};
    max-width: 218px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 7px;
    color: ${Cores.VermelhoCoral};
  }
`
