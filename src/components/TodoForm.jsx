import { useContext, useRef, useState } from "react"
import { DispatchContext } from "../state/DispatchProvider";
import { ACTIONS } from "../state/reducer"
import TodoList from "./TodoList";

const TodoForm = () => {
    const todoInputRef = useRef();
    const dispatch = useContext(DispatchContext);
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({type: ACTIONS.ADD_TODO, payload: todoInputRef.current.value})
      todoInputRef.current.value = ""
    }
  
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" ref={todoInputRef}></input>
          <button type="submit">Add Todo</button>
        </form>
        <TodoList />
      </div>
    )
  };

export default TodoForm;