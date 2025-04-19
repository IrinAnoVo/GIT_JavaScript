import './App.scss';
import { FlashCardForm } from '../components/FlashCardForm';
import { FlashCardList } from '../components/FlashCardList';


//перемещаем в  папку в контекст
/*
function App() {
  const [flashcards, setFlashcards] = useState([
    {
      question: 'Привет',
      answer: 'Hello',
    },
    {
      question: 'Дом',
      answer: 'House'
    },
    {
      question: 'Бумага',
      answer: 'Paper'
    },
    {
      question: 'Еда',
      answer: 'Food'
    },
    {
      question: 'Воздух',
      answer: 'Air'
    }
  ])
*/
/*
//    ПЕРЕЗАПИСЬ  
function App() {
// 1 перехватить событие submit у формы
// 2 остановить перезагрузку страницы
// 3 получить значения из инпутов (с помощью состояний)
// 4 выводить в console такой объект
// {
// id: Date.now(),
// question: "То что ввел пользователь",
// answer: "То что ввел пользователь",
// }
*/

export const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <h1>Flashcards</h1>
        <FlashCardForm />
        <FlashCardsList />
      </div>
    </div>
  )
}

/*
//    ПЕРЕНОС
//созлаем новый объект
const [flashCard, setFlashCard] = useState({
  question: '',
  answer: ''
})
*/

/*
//    ПЕРЕНОС
//объявляем переменную (содержит шаблон из function App()) = переходящая в контекст (дочерняя FlashCardsContext) 
const { addFlashCard } = useContext(FlashCardsContext)
*/

/*
//    ПЕРЕНОС
//перезаписываем состояние карточки
const handleQuestionChange = (e) => {
  setFlashCard({
    ...flashCard,
    question: e.target.value
  })
}
*/

/*
//    ПЕРЕНОС
//визуализируем новую карточку (по шаблону созданных)
const handleAnswerChange = (e) => {
  setFlashCard({
    ...flashCard,
    answer: e.target.value
  })
}
*/

/*
//    ПЕРЕНОС
const handleFormSubmit = (e) => {
  e.preventDefault()
*/

/*
//    ПЕРЕНОС
  //выходим, если поля пустые
  if (!flashCard.question.trim() || !flashCard.answer.trim()) {
      alert('Please fill both fields');
      return;
    }
*/  

/*
//    ПЕРЕНОС
  //объявляем что создание новой карточки перенесли в контекст
  addFlashCard(flashCard)
  /*
  //новая карточка по запросу пользователя
  const newFlashcard = {
    id: Date.now(),
    question: formData.question,
    answer: formData.answer
  }
  */  

/*
//    ПЕРЕНОС  
  //меняет состояние, как пример: 
  //setFlashcards(prev => [...prev, newFlashcard])
  
  //обнуляем
  setFlashCard({
    question: '',
    answer: ''
  })
}

  return (
    <>
      <div className="app-container">
        <div className="content-container">
          <h1>Flashcards</h1>

          

          <FlashCards />
        </div>
      </div>
    </>
  )
}
*/
export default App

/*
1 реализовать localstorage
2 декомпозировать на компоненты
3 реализовать темную тему
4 сделать стили покрасивее
5 добавить кнопку в карточка при нажатии на которой карточка считается пройденной (completed: boolean)
6 реализовать удаление карточки
*/