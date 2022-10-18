import { useReducer, useState } from "react"
import { initialState, ACTIONS, reducer } from "./state/reducer"

function App() {

  const [pendingTodo, setPendingTodo] = useState("")
  const [todos, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    setPendingTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: pendingTodo})
    setPendingTodo("")
  }

  const handleClick = (id) => {
    dispatch({type: ACTIONS.TOGGLE_TODO, payload: id})
  }

  const handleDelete = (id) => {
    dispatch({type: ACTIONS.DELETE_TODO, payload: id})
  }


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={pendingTodo} onChange={(e) => {handleChange(e)}}></input>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (<li onClick={() => {handleClick(todo.id)}} key={todo.id}>{todo.name} {todo.done ? 'DONE' : 'NOT DONE'} 
                  <button onClick={() => {handleDelete(todo.id)}}>DELETE</button></li>);
        })}
      </ul>
    </div>
  )
}

export default App;
