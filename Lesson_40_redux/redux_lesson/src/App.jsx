import { useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux' 
import { DecrementAction, GreetAction } from './store';

function App() {
  console.log(`App render`);
  
  const counter = useSelector((state) => state.count)    // проверяет на изменения, если да - ререндуется компонент state.count
  const dispatch = useDispatch() 
  const [userName, setUsername] = useState('')

  return (
    <>
      <button onClick={
        () => dispatch({
          type: 'increment'
        })
      }>
        Increment
      </button>
      <button onClick={
        () => dispatch(DecrementAction())
      }>
        Decrement
      </button>

      < input
      type="text" 
      placeholder='userName'
      value={userName}
      onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={
        () => dispatch(GreetAction(userName))
      }>
        Greet</button>
      <p>count is {counter}</p>
    </>
  )
}

export default App
