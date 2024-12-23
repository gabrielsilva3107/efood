import { Provider } from 'react-redux'
import Rotas from './routes'
import { GlobalCss } from './styles'

import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import Cart from './components/cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
