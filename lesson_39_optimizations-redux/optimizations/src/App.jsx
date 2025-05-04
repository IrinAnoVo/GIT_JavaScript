import FlashCards from './components/FlashCards'
import './App.scss'
import Form from './components/Form'
import { memo, } from 'react'

function App() {
  return (
    <>
      <div className="app-container">
        <div className="content-container">
          <h1>Flashcards</h1>

          <Form />
          <FlashCards />
        </div>
      </div>
    </>
  )
}

// memo по умолчанию поможет только в том случае, если передаем примитивные типы данных
// или же если передаем объект, то он должен быть неизменяемым 
// (например создан с помощью useState)
// или же с помощью useMemo

const Card = memo(({ data, handleClick }) => { // HOC - Higher Order Component
  console.log('Card rendered')
  return (
    <div className="card">
      <h2>Question: {data.question}</h2>
      <p>Number: {data.number}</p>
      <button onClick={handleClick}>Show Answer</button>
    </div>
  )
})

// 1 - useMemo используем чтобы помочь memo сравнить ссылочные типы данных
// 2 - useMemo используем чтобы выполнять какую-то тяжелую операцию только когда нам надо
// function App() {
//   const question = '4 + 4 = ?'
//   const [number, setNumber] = useState(0)
//   const [counter, setCounter] = useState(0)

//   const data = useMemo(() => {
//     return {
//       question: question,
//       number: number
//     }
//   }, [number]) // если number изменится, то только тогда будет пересоздан объект data

//   // useCallack возвращает функцию, которая будет пересоздана только тогда, когда изменится number
//   const handleClick = useCallback(() => {
//     console.log(`Answer: ${number + 4}`)
//   }, [number])

//   return (
//     <>
//       <button onClick={() => { setCounter(counter + 1) }}>{counter}</button>
//       <button onClick={() => { setNumber(number + 1) }}>Increment</button>
//       <Card data={data} handleClick={handleClick} />
//       {/* <Card question={question} number={number} /> */}
//     </>
//   )
// }

export default App
