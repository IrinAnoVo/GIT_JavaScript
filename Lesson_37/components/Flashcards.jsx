import { FlashCardsContext } from '../context/FlashCardsProvider'
import FlashCard from './FlashCard'
import { useContext } from 'react'

//добавление карточек
export default function FlashCards() {
  const { flashcards } = useContext(FlashCardsContext)
  
  return (
    <div className="flash-cards">
      {flashcards.map(({ id, question, answer }) => {
        return <FlashCard key={id} id={id} question={question} answer={answer} />
      })}
    </div>
  )
}