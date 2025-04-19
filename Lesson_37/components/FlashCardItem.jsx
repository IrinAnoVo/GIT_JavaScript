import FlashCard from './FlashCard'

export const FlashCardItem = ({ card }) => {
  return (
    <FlashCard
      id={card.id}
      question={card.question}
      answer={card.answer}
    />
  );
}
