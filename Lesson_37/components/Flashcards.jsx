import { FlashCardsContext } from '../context/FlashCardsProvider'
import { useContext } from 'react'
import { FlashCardList } from './components/FlashCardList'

export default function FlashCards() {
  const { flashcards } = useContext(FlashCardsContext)

  return (
    <FlashCardList flashcards= {flashcards} />
  )
}
