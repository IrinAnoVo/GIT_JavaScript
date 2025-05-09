// redux - monostore
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

// state = null
// action = {
//   type: "increment",
// }
// reducer это функция, которая занимается изменением состояния на основе action -> получает действие и значение, потом возвращает новое состояние меняя его иммютабельно
// при первом открытии приложения state(предыдущее состояние) равен null
// чтобы не передавать null в reducer, мы передаем по умолчанию initialState

/*const reducer = (state = initialState, action) => {
  //if (action.type === "increment") {
  // return {
  //  ...state,
  //  count: state.count + 1,
  // }
  //}
  //return state
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      }
      case 'decrement':
        console.log(action);

        return {
          ...state,
          count:state.count - 1,
        }
      case 'greet':
        console.log(action);

        console.log(`Hello, ${action.payload}`);
        return state       
      default:
        return state
   }
}
   */

const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase("increment", (state) => {
    state.count += 1
  })
  .addCase("decrement", (state) => {
    state.count -= 1
  })
  .addCase("greet", (state, action) => {
    console.log(action);

    console.log(`Hello, ${action.payload}`)
      return state
  })
})

export const GreetAction = createAction('greet')

export const DecrementAction = createAction('decrement')
export const IncrementAction = createAction('increment')

export const store = configureStore({
  reducer,
})

/*
console.log(store.getState());
store.subscribe(() =>{         //отслеживает
  console.log('State chahged:', store.getState());  
})
store.dispatch({              //состояние изначальное
  type: 'increment'
})
store.dispatch({              //состояние меняется 
  type: 'greet',
  payload: 'John'
})
  */
