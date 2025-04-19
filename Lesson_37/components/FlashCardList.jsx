import { FlashCardItem } from '../components/FlashCardItem';



export function FlashCardList ({ flashcards}) {
  if (!flashcards || flashcards.length === 0) {
    return (
    <div className='empty-message'>
      <p>Нет карточек для отображения</p>
    </div>
  );
}

  //перенос из FlashCards
  return (
    <div className="flash-cards">
      {flashcards.map(card => (
        <FlashCardItem 
          key={card.id} 
          card={card.id}
        />
      ))}
    </div>
  )
}
