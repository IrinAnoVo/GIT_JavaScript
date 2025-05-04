import { FlashCardsContext } from '../context/FlashCardsProvider'
import FlashCard from './FlashCard'
import { useContext } from 'react'

export default function FlashCards() {
  const { flashcards } = useContext(FlashCardsContext)

  return (
    <div className="flash-cards">
      {flashcards.map(({ id, question, answer, isDone }) => {
        return <FlashCard key={id} id={id} question={question} answer={answer} isDone={isDone} />
      })}
    </div>
  )
}
