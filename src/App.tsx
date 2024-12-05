import Rotas from './routes'
import { GlobalCss } from './styles'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss></GlobalCss>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
