import React from 'react'

// (x)клик на удаление
export default function FlashCard({ id, question, answer, onRemove, completed, onToggleCompleted }) {
  return (
    <div className={`flash-card ${completed ? 'completed' : ''}`}>

      <button className='remove-btn' 
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}>x</button>

        <button className={`complete-btn ${completed ? 'completed' : ''}`}
        onClick={(e) => {
          e.stopPropagation(); 
          onToggleCompleted(id);
        }}>
          {completed ? '✓' : ''}
        </button>

      <div className="inner-card">
        <div className="front">
          <h2>{question}</h2>
        </div>
        <div className="back">
          <h2>{answer}</h2>

        </div>
      </div>
    </div>
  )
}