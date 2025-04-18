import React from 'react'

//создание ноаой карточки из Арр
export default function FlashCard({ id, question, answer }) {
  return (
    <div className="flash-card" key={id}>
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