import { useState } from 'react'
import './App.scss'

function App() {
  const[username, setUsername] = useState("")
  const handleusername = function(e) {
    setUsername(e.target.value)
    
  }

  return (
    <div className="form-block">
      <h1>Sign Up</h1>
      <form className='form'>
        <div>
          <label htmlFor="">Username {username}</label>
          <input onChange={handleusername} value={username} type="text" id='username' />
          </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" id='email' />
            </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" id='password' />
          </div>
        <button>Submit</button>
      </form>
  </div>
  )
}

export default App
