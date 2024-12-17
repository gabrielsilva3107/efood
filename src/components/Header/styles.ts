import styled from 'styled-components'
import garfofaca from '../../assets/images/garfofaca.png'

export const Header = styled.header`
  background-image: url(${garfofaca});
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
    height: 57.5px;
  }
`
