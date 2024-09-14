import { useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [inputVal, setInputVal] = useState("")

  function handleChange(e) {
    setInputVal(e.target.value)
  }
  function handleSubmit() {
    if (inputVal) {
      setTodo([...todo, inputVal])
    }
    setInputVal('')
  }
  return (
    <>
      <div className="container">
      <h1><i className="fas fa-book"></i>   to-do list</h1>
          {todo.length===0?<p>No tasks have been added</p>: <div className="itemsList">
          
          
          <ul>
            {
              todo.map((item, index) => {
                return <li key={index}>
                  <input name='checkbox' type="checkbox" />{item}
                </li>
              })
            }
          </ul>
        </div>
        }
       
        <input
          type="text"
          name="task"
          id="task"
          placeholder='Enter your task'
          onChange={handleChange}
          value={inputVal}
        />
        <button onClick={handleSubmit}>
        <i className="fas fa-plus"></i>    Add Task
        </button>
      </div>
    </>
  )
}

export default App
