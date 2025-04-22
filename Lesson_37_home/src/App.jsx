import FlashCards from '../components/FlashCards'
import FlashcardForm from '../components/FlashcardForm'
import { useTheme } from '../context/ThemeContext';
import './App.scss'

//перезаписываем function App()
export default function App() {

  //состояние темы
  const { isDark, toggleTheme } = useTheme()

  // 1 перехватить событие submit у формы
  // 2 остановить перезагрузку страницы
  // 3 получить значения из инпутов (с помощью состояний)
  // 4 выводить в console такой объект
  // {
  //   id: Date.now(),
  //   question: "То что ввел пользователь",
  //   answer: "То что ввел пользователь",
  // }

  //2ю декомпозировать на компоненты. переносим в FlashcardForm
  /*
  const [flashCard, setFlashCard] = useState({
    question: '',
    answer: ''
  })
  

  const { addFlashCard } = useContext(FlashCardsContext)

  const handleQuestionChange = (e) => {
    setFlashCard({
      ...flashCard,
      question: e.target.value
    })
  }
  const handleAnswerChange = (e) => {
    setFlashCard({
      ...flashCard,
      answer: e.target.value
    })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()

    addFlashCard(flashCard)
  
    setFlashCard({
      question: '',
      answer: ''
    })
  }
*/

//кусок html из середины переносим в FlashcardForm, добавляем компонент <FlashcardForm/> (темы)
// и создаём  контекст ThemeContext, дорисовываем App.scss
/*
return (
    <>
      <div className="app-container">
        <div className="content-container">
          <h1>Flashcards</h1>
          <button type="submit">Add Flashcard</button>
            </form>
          </div>

          <FlashCards />
        </div>
      </div>
    </>

*/
  return (
    <>
      <div className={`app-container ${isDark ? 'dark' : ''}`}>
        <div className="content-container">
          <div className='header'>
            <h1>FlashCards</h1>
            <button onClick={toggleTheme} className='theme-toggle'>
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          <FlashcardForm/>
          <FlashCards />
        </div>
      </div>
    </>
  )
}
