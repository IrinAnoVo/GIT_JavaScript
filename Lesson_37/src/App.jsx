import FlashCards from '../components/Flashcards'
import { FlashCardsContext } from './context/FlashCardsContext';
import './App.scss'
import { useState, useContext } from 'react'


//перемещаем в  папку в контекст
/*
function App() {
  const [flashcards, setFlashcards] = useState([
    {
      question: 'Привет',
      answer: 'Hello',
    },
    {
      question: 'Дом',
      answer: 'House'
    },
    {
      question: 'Бумага',
      answer: 'Paper'
    },
    {
      question: 'Еда',
      answer: 'Food'
    },
    {
      question: 'Воздух',
      answer: 'Air'
    }
  ])
*/
  
function App() {
// 1 перехватить событие submit у формы
// 2 остановить перезагрузку страницы
// 3 получить значения из инпутов (с помощью состояний)
// 4 выводить в console такой объект
// {
// id: Date.now(),
// question: "То что ввел пользователь",
// answer: "То что ввел пользователь",
// }

//созлаем новый объект
const [fleshCard, setFlashCard] = useState({
  question: '',
  answer: ''
}, [])

//объявляем переменную (содержит function App()) = переходящая в контекст (дочерняя FlashCardsContext) 
const { addFlashCard } = useContext(FlashCardsContext)

//перезаписываем состояние карточки
const handleQuestionChange = (e) => {
  setFlashCard({
    ...fleshCard,
    question: e.target.value
  })
}

//визуализируем новую карточку (по шаблону созданных)
const handleAnswerChange = (e) => {
  setFlashCard({
    ...fleshCard,
    answer: e.target.value
  })
}

const handleFormSubmit = (e) => {
  e.preventDefault()

  //объявляем что создание новой карточки перенесли в контекст
  addFlashCard(fleshCard)
  /*
  //новая карточка по запросу пользователя
  const newFlashcard = {
    id: Date.now(),
    question: formData.question,
    answer: formData.answer
  }
  */
  
  //=====здесь не нужно
  //меняет состояние, как пример: 
  //setFlashcards(prev => [...prev, newFlashcard])
  
  //обнуляем
  setFlashCard({
    question: '',
    answer: ''
  })
}

  return (
    <>
      <div className="app-container">
        <div className="content-container">
          <h1>Flashcards</h1>

          <div className="flashcard-form">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="question"
                  placeholder='question'
                  value={fleshCard.question}
                  onChange={handleQuestionChange} />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="answer"
                  placeholder='answer'
                  value={fleshCard.answer}
                  onChange={handleAnswerChange} />
              </div>
              <button type="submit">Add Flashcard</button>
            </form>
          </div>

          <FlashCards />
        </div>
      </div>
    </>
  )
}

export default App

/*
1 реализовать localstorage
2 декомпозировать на компоненты
3 реализовать темную тему
4 сделать стили покрасивее
5 добавить кнопку в карточка при нажатии на которой карточка считается пройденной (completed: boolean)
6 реализовать удаление карточки
*/