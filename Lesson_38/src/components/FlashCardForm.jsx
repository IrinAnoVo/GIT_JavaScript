// import(ы) вставляем из App.jsx
import { useState, useContext } from 'react'
import { FlashCardsContext } from '../context/FlashCardsProvider'

export default function FlashcardForm() {
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
    )
}