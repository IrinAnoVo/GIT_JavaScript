import React, { useContext, useState } from 'react'
import { FlashCardsActionsContext } from '../context/FlashCardsProvider'

export default function Form() {
  const [fleshCard, setFlashCard] = useState({
    question: '',
    answer: ''
  })

  const { addFlashCard } = useContext(FlashCardsActionsContext)

  const handleQuestionChange = (e) => {
    setFlashCard({
      ...fleshCard,
      question: e.target.value
    })
  }
  const handleAnswerChange = (e) => {
    setFlashCard({
      ...fleshCard,
      answer: e.target.value
    })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()

    addFlashCard(fleshCard)

    setFlashCard({
      question: '',
      answer: ''
    })
  }

  return (
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
  )
}
