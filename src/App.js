import {useState, useEffect} from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

import './App.css'
// Replace your code here
const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(false)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <div className="app-wrapper">
        <h1 className="header">Todo List</h1>
        <div>
          <TaskInput
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TaskList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App
