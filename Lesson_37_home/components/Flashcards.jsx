import { FlashCardsContext } from '../context/FlashCardsProvider'
import FlashCard from './FlashCard'
import { useContext } from 'react'

export default function FlashCards() {
  const { flashcards, removeFlashCard, toggleCompleted } = useContext(FlashCardsContext)

//прорисовка карточек с удалением
  return (
    <div className="flash-cards">
      {flashcards.map(({ id, question, answer, completed }) => {
        return (
        <FlashCard 
        key={id} 
        id={id} 
        question={question} 
        answer={answer}
        onRemove={removeFlashCard}
        completed={completed}
        onToggleCompleted={toggleCompleted}
        />
        )
      })}
    </div>
  )
}