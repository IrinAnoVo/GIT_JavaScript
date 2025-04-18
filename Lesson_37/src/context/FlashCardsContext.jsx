import { createContext, useState } from 'react'

export const FlashCardsContext = createContext()

//заворачиваем function App() в провайдер + дочерние элементы
export function FlashCardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: 'Привет',
      answer: 'Hello',
    },
    {
      id: 2,
      question: 'Дом',
      answer: 'House'
    },
    {
      id: 3,
      question: 'Бумага',
      answer: 'Paper'
    },
    {
      id: 4,
      question: 'Еда',
      answer: 'Food'
    },
    {
      id: 5,
      question: 'Воздух',
      answer: 'Air'
    }
  ])

  //переменная для новай карточки (из Арр) по запросу пользователя
  const addFlashCard = ({ question, answer }) => {
    const newFlashCard = {
      id: Date.now(),
      question: question,
      answer: answer
    }

    //визуализируем новую карточку (по шаблону созданных)
    setFlashcards([
      ...flashcards,
      newFlashCard
    ])
  }

  //все данные обёрнутые в FlashCardsContext для передачи через .Provider содержащий дочерние элементы
  return (
    <FlashCardsContext.Provider value={{
      flashcards, setFlashcards, addFlashCard
    }}>
      {children}
    </FlashCardsContext.Provider>
  )
}