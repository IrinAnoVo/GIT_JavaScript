import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const FlashCardsContext = createContext()

export function FlashCardsProvider({ children }) {
  // 1. реализовать localstorage. Загружаем карточки из LocalStorage при инициализации
  const [flashcards, setFlashcards] = useState(() => {    
    const saved = localStorage.getItem('flashcards')
    return saved ? JSON.parse(saved) : [
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
  ]
})


//Сохраняем карточки в LocalStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards))
  }, [flashcards])

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
  //6. реализовать удаление карточки
  const removeFlashCard = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id))
  }
  
  //5. добавить кнопку в карточку при нажатии на которую карточка считается пройденной (completed: boolean)
  const toggleCompleted = (id) => {
    setFlashcards(prev => prev.map(card => 
      card.id === id ? { ...card, completed: !card.completed } : card
    ));
  };

  return (
    <FlashCardsContext.Provider value={{
      flashcards, setFlashcards, addFlashCard, removeFlashCard, toggleCompleted
    }}>
      {children}
    </FlashCardsContext.Provider>
  )
}