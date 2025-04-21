import { createContext, useState } from 'react'

export const FlashCardsContext = createContext()

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

  const addFlashCard = ({ question, answer }) => {
    const newFlashCard = {
      id: Date.now(),
      question: question,
      answer: answer
    }

    setFlashcards([
      ...flashcards,
      newFlashCard
    ])
  }

  return (
    <FlashCardsContext.Provider value={{
      flashcards, setFlashcards, addFlashCard
    }}>
      {children}
    </FlashCardsContext.Provider>
  )
}