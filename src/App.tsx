import { Provider } from 'react-redux'
import Rotas from './routes'
import { GlobalCss } from './styles'

import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import Cart from './components/cart'
import Entrega from './components/Entrega'
import Pagamento from './components/Pagamento'
import Confirmacao from './components/Confirmacao'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <Rotas />
        <Cart />
        <Entrega />
        <Pagamento />
        <Confirmacao />
      </BrowserRouter>
    </Provider>
  )
}

export default App
