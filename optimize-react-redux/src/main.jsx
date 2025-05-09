import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductProvider.jsx'
import { store } from './stote.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider store={store}>
      <App />
    </ProductProvider>
  </StrictMode>,
)