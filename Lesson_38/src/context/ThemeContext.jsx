import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  
  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}



/* 
//шаблон для дальнейшего использования useTheme в компонентах. Обеспечивает
//сохранение и переключение между темами, и интеграцию со стилями
import { useTheme } from './ThemeContext'

function MyComponent() {
  const { isDark, toggleTheme } = useTheme()
  // ...
*/