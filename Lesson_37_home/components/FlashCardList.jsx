import { FlashCardItem } from './FlashCardItem';
import { EmptyFlashcardsMessage} from './EmptyFlashcardsMessage';


export function FlashCardList ({ flashcards}) {
  if (!flashcards || flashcards.length === 0) {
    return <EmptyFlashcardsMessage/>;
  }

  //перенос из FlashCards
  return (
    <div className="flash-cards">
      {flashcards.map(card => (
        <FlashCardItem 
          key={card.id} 
          id={card.id}
        />
      ))}
    </div>
  )
}