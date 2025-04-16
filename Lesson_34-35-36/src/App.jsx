import { useEffect, useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  const [randomRecipeId, setRandomRecipeId] = useState(1)

/*
useEffect(() => {
setInterval(() => {
setCount(prevCount => prevCount + 1)
}, 1000);
}, [])

// useEffect(() => {
//  let intervalId = setInterval(() => {
//  setCount(count + 1)
// }, 1000);
// return () => {
//  clearInterval(intervalId)
// }
// }, [count])
*/

/*
//монтаж, обновление (useData - отправили запрос и получили данные) срабатывает после html (когда html уже в дом дереве)
  useEffect(() => {
    console.log("Companent mounted");    
    console.log(`Counter value when mounted: ${count}`);

//размонтаж возвращает useEffect только последние обновления и передает на для нового обновления, и хранит до следующего вызова обновления
    return () => {
      console.log("Component unmounted");
      console.log(`Counter value before unmounted: ${count}`);
    }
  }, [count])
*/

  return (
    <>      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
        <GreetUser username="" /> 
        <button 
          onClick={() => {
          // [0 - 1) * 100 = [0 - 100) + 1 = [1 - 101)
            setRandomRecipeId(Math.floor(Math.random() * 100) +1)
          }}
          style={{ marginBottom: 10 }}>
          Get random recipe
        </button> 
        <RecipeCard recipeId={randomRecipeId} />     
    </>
  )
}

function RecipeCard({ recipeId }) {
// 1 после получения ответа от сервера обновить состояние recipe
// 2 отобразить данные на карточке
// 3 Добавить лоадер (текст идет заргузка рецепта)
// 4 Добавить обработку ошибок и отобразить на страницу

  useEffect(() => {
    const controller = new AbortController
    fetch(`https://dummyjson.com/recipes/ ${recipeId}`, {
      signal: controller.signal
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);      
    })

    return () => {
      controller.abort()
    }

  }, [recipeId])

  
  return (
    <>
      <div className='recipe-card'>
        <div className='recipe-card__image'>
          <img src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="recipe" />
        </div>
        <div className='recipe-card__content'>
          <h3 className='recipe-card__title'>Recipe Title</h3>
          <p className='recipe-card__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      </div>
    </>
  )
}

function GreetUser({ username }) {
  const [greeting, setGreeting] = useState('')

//реагирует наизменения username
  useEffect(() => {
//если не пустой изменять Greeting
    if (username !== "") {
  setGreeting(`Hello ${username}`)
  }

  return () => {
    setGreeting('')
    }
  }, [username])
 
return (
  <div>
    <h1>{greeting}</h1>
  </div>
  )
}




export default App
