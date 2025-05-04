// redux - monostore
import { configureStore } from "@reduxjs/toolkit"

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
const reducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state
  // switch (action.type) {
  //   case "increment":
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     }
  //   default:
  //     return state
  // }
}

export const store = configureStore({
  reducer,
})