import { useState, useContext } from "react";
import { FlashCardsContext } from "../context/FlashCardsProvider";

export const FlashCardForm = () => {
    const [flashCard, setFlashCard] = useState ({
        question: '',
        answer: ''
    })
    const { addFlashCard } = useContext(FlashCardsContext);

    const handleQuestionChange = (e) => {
      setFlashCard(prev => ({ ...prev, question: e.target.value }));
    };
  
    const handleAnswerChange = (e) => {
      setFlashCard(prev => ({ ...prev, answer: e.target.value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!flashCard.question.trim() || !flashCard.answer.trim()) return;
      
      addFlashCard(flashCard);
      setFlashCard({ question: '', answer: '' });
    };
  
    //перенос из Арр
    return (
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Question"
            value={flashCard.question}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Answer"
            value={flashCard.answer}
            onChange={handleAnswerChange}
          />
        </div>
        <button type="submit">Add Flashcard</button>
      </form>
    )
}
