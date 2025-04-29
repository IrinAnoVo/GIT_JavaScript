import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { FlashCardsProvider } from './context/FlashCardsProvider'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FlashCardsProvider>
        <App />
      </FlashCardsProvider>
    </ThemeProvider>
  </StrictMode>,
)
