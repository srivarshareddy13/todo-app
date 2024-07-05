import './index.css'

const TaskList = ({todos, setTodos, setEditTodo}) => {
  const handleDelete = ({id}) => {
    setTodos(todos.filter(each => each.id !== id))
  }

  const handleComplete = each => {
    setTodos(
      todos.map(item => {
        if (item.id === each.id) {
          return {...item, completed: !item.completed}
        }
        return item
      }),
    )
  }

  const handleEdit = ({id}) => {
    const findTodo = todos.find(todo => todo.id === id)
    setEditTodo(findTodo)
  }

  return (
    <div>
      {todos.map(each => (
        <li className="list-item" key={each.id}>
          <p className={`list ${each.completed ? 'complete' : ''}`}>
            {each.title}
          </p>
          <div>
            <button
              className="button-complete task-button"
              type="button"
              onClick={() => handleComplete(each)}
            >
              <button className="check-button" type="button">
                {each.completed ? 'X' : ''}
              </button>
            </button>
            <button
              type="button"
              className="button-edit task-button"
              onClick={() => handleEdit(each)}
            >
              Edit
            </button>
            <button
              type="button"
              className="button-delete task-button"
              onClick={() => handleDelete(each)}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}
export default TaskList
