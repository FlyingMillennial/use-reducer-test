import { useContext, useState } from "react"
import { DispatchContext, TodoContext } from "../state/DispatchProvider";
import { ACTIONS } from "../state/reducer"
import TodoList from "./TodoList";

const TodoForm = () => {

    const [pendingTodo, setPendingTodo] = useState("")
    const dispatch = useContext(DispatchContext);
    
    const handleChange = (e) => {
      setPendingTodo(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({type: ACTIONS.ADD_TODO, payload: pendingTodo})
      setPendingTodo("")
    }
  
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={pendingTodo} onChange={(e) => {handleChange(e)}}></input>
          <button type="submit">Add Todo</button>
        </form>
        <TodoList />
      </div>
    )
  };

export default TodoForm;