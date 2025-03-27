import './App.css'
// import { Fragment } from 'react'
import Header from "./components/Header.jsx"
import ProfileCards from './components/ProfileCards.jsx'

function App() {
   // const imgElem = createElement(
  //   'img',
  //   { src: "https://avatar.iran.liara.run/public/boy", alt: "person" }
  // )

  // const mediaElem = createElement(
  //   'div',
  //   { className: 'media' },
  //   imgElem
  // )

  // const profileCard = createElement(
  //   'div',
  //   { className: 'profile-card' },
  //   mediaElem
  // )

  return (
    <>
      <Header />
      <ProfileCards />
                
    </>
    /*<>
      <h1>Hello world</h1> 
      <h2>React lesson</h2> 
    </>
    */
  )
}

export default App
