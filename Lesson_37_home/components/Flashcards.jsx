import { FlashCardsContext } from '../context/FlashCardsProvider'
import { useContext } from 'react'
import { FlashCardsList } from '../components/FlashCardList'

export default function FlashCards() {
  const { flashcards } = useContext(FlashCardsContext)

  return (
    <FlashCardsList flashcards= {flashcards} />
  )
}