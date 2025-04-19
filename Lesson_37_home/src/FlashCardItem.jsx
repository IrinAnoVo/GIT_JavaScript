import { FlashCard } from '..components/FlashCard'

export function FlashCardItem({ card }) {
  return (
    <FlashCard 
      id={card.id}
      question={card.question}
      answer={card.answer}
    />
  );
}