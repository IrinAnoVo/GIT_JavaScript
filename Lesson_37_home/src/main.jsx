import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { FlashCardsProvider } from '../context/FlashCardsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <FlashCardsProvider>
    <App />
    </FlashCardsProvider>
  </StrictMode>,
)
