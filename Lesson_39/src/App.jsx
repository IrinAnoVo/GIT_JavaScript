import './App.css'
import { store } from './store'
import { useSelector } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.count)

  return (
      <button onClick={
        () => store.dispatch({
          type: 'increment'
        })
      }>
        count is {counter}
      </button>    
  )
}

export default App
