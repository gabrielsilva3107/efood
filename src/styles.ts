import styled, { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;


  }
`
export const Cores = {
  Branco: '#FFFFFF',
  VermelhoCoral: '#E66767',
  Creme: '#FFF8F2',
  CremePessego: '#FFEBD9',
  AmareloQueimado: '#FFB930'
}

export const Container = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
`

export const Logo = styled.img`
  height: 57.5px;
  width: 125px;
  margin: 40px;
`
