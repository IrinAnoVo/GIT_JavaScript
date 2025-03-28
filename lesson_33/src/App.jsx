import { useState } from 'react'
import './App.scss'

function App() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null
  })

  /*Вынести input с label в отдельные компоненты и передавать нудные значения через пропсы
  Добавить валидацию для почты и паролья, сделать стили красивее
  Сделать что если нет ошибок у кнопки было disabled false, а если есть то true и добавить стили для деактивированной кнопки*/


  const handleUsername = function (e) {
    setFormState({
      ...formState,
      username: e.target.value,
    })
    if (e.target.value.trim() === "") {
      setErrors({
        ...errors,
        username: "Username is required"
      })
      return
    }
    if (e.target.value.length <= 3) {
      setErrors({
        ...errors,
        username: "Username need to be more then 3 symbols"
      })
      return
    }
    setErrors({
      ...errors,
      username: null
    })
  }

  const handleEmail = function (e) {
    setFormState({
      ...formState,
      email: e.target.value,
    })
    if (e.target.value <= 3) {
      setErrors({
        ...errors,
        email: "Email need to be more then 3 symbols"
      })
      return
    }
    if (!e.target.value.split("").includes('@')) {
      setErrors({
        ...errors,
        email: "Email must contain the symbol - @"
      })
      return
    }
    setErrors({
      ...errors,
      email: null
    })
  }

  const handlePassword = function (e) {
    setFormState({
      ...formState,
      password: e.target.value
    })
    if (e.target.value.length <= 3 || e.target.value.length >= 13) {
      setErrors({
        ...errors,
        password: " Password must contain from 3 to 12 symbols"
      })
      return
    }
    setErrors({
      ...errors,
      password: null
    })
  }

   // Проверяем, есть ли ошибки
  const handlerFormSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  const hasErrors = Object.values(errors).some(error => error !== null)

  return (
    <div className="form-block">
      <h1>Sign Up</h1>
      <form onSubmit={handlerFormSubmit} className='form'>
        
        <div>
          <label htmlFor="username">Username
            {errors.username && <span style={{
              color: 'red',
              fontSize: "12px",
              marginLeft: "10px"
            }}>{errors.username}</span>}
          </label>
          <input className={errors.username ? "error" : ""} onChange={handleUsername} value={formState.username} type="text" id='username' />
        </div>

        <div>
          <label htmlFor="email">Email
          {errors.email && <span style={{
              color: 'red',
              fontSize: "12px",
              marginLeft: "10px"
            }}>{errors.email}</span>}
          </label>
          <input className={errors.email ? "error" : ""} onChange={handleEmail} value={formState.email} type="email" id='email' />
        </div>

        <div>
          <label htmlFor="password">Password
          {errors.password && <span style={{
              color: 'red',
              fontSize: "12px",
              marginLeft: "10px"
            }}>{errors.password}</span>}
          </label>
          <input className={errors.password ? "error" : ""} onChange={handlePassword} value={formState.password} type="password" id='password' />
        </div>

        <button disabled={hasErrors} 
          style={hasErrors ? styles.disabledButton : styles.activeButton}>Submit</button>

        <div>
          <p>Errors</p>
          <pre>
            {JSON.stringify(errors, 0, 2)}
          </pre>
          <p>Form State</p>
          <pre>
            {JSON.stringify(formState, 0, 2)}
          </pre>
        </div>

      </form>
    </div>
  )
}

// Стили для кнопки
const styles = {
  disabledButton: {
    cursor: 'not-allowed',
    backgroundColor: '#cccccc',
    color: '#666666',
    border: '1px solid #999999',
    opacity: 0.6
  },
  activeButton: {
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px'
  }
}

export default App
