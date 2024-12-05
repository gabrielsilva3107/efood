import styled from 'styled-components'

export const Header = styled.header`
  background-image: url('public/garfofaca.png');
  background-size: cover;

  div {
    height: 186px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    max-width: 1024px;
    margin: 0 auto;
  }

  img {
    width: 125px;
    heigth: 57.5px;
  }
`
