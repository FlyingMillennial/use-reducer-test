import { useContext, useRef } from "react"
import { DispatchContext, TodoContext } from "../state/DispatchProvider";
import { ACTIONS } from "../state/reducer"
import TodoList from "./TodoList";

const TodoForm = () => {
    const todoInputRef = useRef();
    const filterInputRef = useRef();
    const dispatch = useContext(DispatchContext);
    const todoState = useContext(TodoContext);
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({type: ACTIONS.ADD_TODO, payload: {todoName: todoInputRef.current.value, dispatch}})
      todoInputRef.current.value = ""
    }

    const handleFilter = (e) => {
      e.preventDefault()
      dispatch({type: ACTIONS.UPDATE_FILTER, payload: filterInputRef.current.value})
    }
  
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" ref={filterInputRef}></input>
          <button onClick={(e) => handleFilter(e)}>Filter</button>
          <br />
          <input type="text" ref={todoInputRef}></input>
          <button type="submit">Add Todo</button>
          {
            todoState.error && (
              <div>{todoState.error}</div>
            )
          }
        </form>
        <TodoList />
      </div>
    )
  };

export default TodoForm;