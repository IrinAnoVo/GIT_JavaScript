import { useState, useEffect, useCallback } from 'react';


const INITIAL_FLASHCARDS = [];

//заворачиваем function App() в провайдер + дочерние элементы
export function FlashCardsContext({ children }) {
  const [flashcards, setFlashcards] = useState(INITIAL_FLASHCARDS)
    //убираем начальные карточки, они будут загружены из LocalStorage
    /*
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
  */

  //загрузка данных из LocalStorage при монтировании
  useEffect(() => {
    try {
      const saved = localStorage.getItem('flashcards');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setFlashcards(parsed);
        }
      }
    } catch (error) {
      console.error('Failed загрузки flashcards из localStorage:', error);
    }
  }, [])

  // ====== сохранение данных в LocalStorage при изменении (добавлении)
  useEffect(() => {
    try {
      localStorage.setItem('flashcards', JSON.stringify(flashcards));
    } catch (error) {
      console.error('Failed сохранения flashcards в localStorage:', error);
    }
  }, [flashcards])

  //переменная для новай карточки (из Арр) по запросу пользователя
  const addFlashCard = useCallback((card) => {
    setFlashcards(prev => [
      ...prev, 
      {
        id: Date.now(),
        question: card.question.trim(),
        answer: card.answer.trim()
      }
    ]);
  }, [])

  // Удаление карточки
  const removeFlashCard = useCallback((id) => {
    setFlashcards(prev => prev.filter(card => card.id !== id));
  }, [])
  

  //контекстные значения
  const contextValue = {
    flashcards,
    addFlashCard,
    removeFlashCard
  }

  /*
    // Исправлено обновление состояния
    setFlashcards(prev => [
      ...prev,
      newFlashCard
    ])    
  }
  */

  //все данные обёрнутые в FlashCardsContext для передачи через .Provider содержащий дочерние элементы
  return (
    <FlashCardsContext.Provider value={contextValue}>
      {children}
    </FlashCardsContext.Provider>
  );
}