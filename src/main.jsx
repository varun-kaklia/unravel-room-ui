import ReactDOM from 'react-dom/client'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './store/store'

function ThemedApp() {
  const mode = useSelector(state => state.theme.mode)
  return <div className={mode}><App /></div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemedApp />
    </BrowserRouter>
  </Provider>
)
