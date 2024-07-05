import {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const TaskInput = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onChangeInput = e => {
    setInput(e.target.value)
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map(todo =>
      todo.id === id ? {title, id, completed} : todo,
    )
    setTodos(newTodo)
    setEditTodo('')
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const handleSubmit = event => {
    event.preventDefault()
    if (!editTodo) {
      setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        required
        onChange={onChangeInput}
        className="task-input"
      />
      <button className="button-add" type="submit">
        {editTodo ? 'OK' : 'ADD'}
      </button>
    </form>
  )
}

export default TaskInput
