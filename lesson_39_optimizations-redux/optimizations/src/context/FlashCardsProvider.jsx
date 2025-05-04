import { createContext, useCallback, useMemo, useState } from 'react'

export const FlashCardsContext = createContext()
export const FlashCardsActionsContext = createContext()

export function FlashCardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: 'Привет',
      answer: 'Hello',
      isDone: false
    },
    {
      id: 2,
      question: 'Дом',
      answer: 'House',
      isDone: false
    },
    {
      id: 3,
      question: 'Бумага',
      answer: 'Paper',
      isDone: false
    },
    {
      id: 4,
      question: 'Еда',
      answer: 'Food',
      isDone: false
    },
    {
      id: 5,
      question: 'Воздух',
      answer: 'Air',
      isDone: false
    }
  ])

  const addFlashCard = useCallback(({ question, answer }) => {
    const newFlashCard = {
      id: Date.now(),
      question: question,
      answer: answer,
      isDone: false
    }

    // prev = previous state (прежнее состояние)
    setFlashcards(function (prevFlashCards) {
      return [...prevFlashCards, newFlashCard]
    })
  }, [])

  const toggleIsDone = useCallback((id) => {
    setFlashcards(function (prevFlashCards) {
      return prevFlashCards.map((flashcard) => {
        if (flashcard.id === id) {
          return {
            ...flashcard,
            isDone: !flashcard.isDone
          }
        }
        return flashcard
      })
    })
  }, [])

  // // 0x000xbs123
  // const obj = {
  //   id: 4,
  //   question: 'Еда',
  //   answer: 'Food',
  //   isDone: false
  // }
  // obj.isDone = !obj.isDone // мутабельный метод
  // // 0x000xbs123

  // const obj1 = {
  //   ...obj,
  //   isDone: !obj.isDone // иммутабельный метод
  // }
  // // 0x000bs5646

  // 0x000xbs123
  // { 
  //   id: 4,
  //   question: 'Еда',
  //   answer: 'Food',
  //   isDone: false
  // }

  // version 1
  // flashcard.isDone = !flashcard.isDone
  // 0x000xbs123
  // { 
  //   id: 4,
  //   question: 'Еда',
  //   answer: 'Food',
  //   isDone: true
  // }

  // version 2
  // {
  //   ...flashcard,
  //   isDone: !flashcard.isDone
  // }
  // 0x000xbs5646
  // { 
  //   id: 4,
  //   question: 'Еда',
  //   answer: 'Food',
  //   isDone: true
  // }

  const state = useMemo(() => {
    return {
      flashcards
    }
  }, [flashcards])

  const actions = useMemo(() => {
    return {
      addFlashCard,
      toggleIsDone
    }
  }, [addFlashCard, toggleIsDone])

  return (
    <FlashCardsContext.Provider value={state}>
      <FlashCardsActionsContext.Provider value={actions}>
        {children}
      </FlashCardsActionsContext.Provider>
    </FlashCardsContext.Provider>
  )
}
