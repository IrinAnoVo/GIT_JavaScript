import { memo, useContext } from "react"
import { FlashCardsActionsContext } from "../context/FlashCardsProvider"

function FlashCard({ id, question, answer, isDone }) {
  console.log(`Flashcard ${id} rendered`)
  const { toggleIsDone } = useContext(FlashCardsActionsContext)
  return (
    <div onClick={() => {
      toggleIsDone(id)
    }} className={`flash-card ${isDone ? "active" : ""}`} key={id}>
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

export default memo(FlashCard)