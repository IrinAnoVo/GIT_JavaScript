import FlashCards from '../components/FlashCards'
import { FlashCardsContext } from '../context/FlashCardsProvider'
import './App.scss'
import { useState, useContext } from 'react'

function App() {
  // 1 перехватить событие submit у формы
  // 2 остановить перезагрузку страницы
  // 3 получить значения из инпутов (с помощью состояний)
  // 4 выводить в console такой объект
  // {
  //   id: Date.now(),
  //   question: "То что ввел пользователь",
  //   answer: "То что ввел пользователь",
  // }

  const [flashCard, setFlashCard] = useState({
    question: '',
    answer: ''
  })

  const { addFlashCard } = useContext(FlashCardsContext)

  const handleQuestionChange = (e) => {
    setFlashCard({
      ...flashCard,
      question: e.target.value
    })
  }
  const handleAnswerChange = (e) => {
    setFlashCard({
      ...flashCard,
      answer: e.target.value
    })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()

    addFlashCard(flashCard)

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
                  value={flashCard.question}
                  onChange={handleQuestionChange} />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="answer"
                  placeholder='answer'
                  value={flashCard.answer}
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