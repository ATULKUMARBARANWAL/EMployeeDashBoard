import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'   // 👈 import Provider
import store from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>    {/* ✅ Wrap your App here */}
      <App />
    </Provider>
  </StrictMode>
)
