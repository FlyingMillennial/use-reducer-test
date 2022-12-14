import React, { useContext } from 'react';
import { DispatchContext, TodoContext } from "../state/DispatchProvider";
import { ACTIONS } from "../state/reducer"

const TodoList = () => {
    const todoState = useContext(TodoContext);
    const dispatch = useContext(DispatchContext);

    const handleClick = (id, done) => {
        console.log("In the click function")
        const payload = {
          id,
          done, 
        }
        dispatch({type: ACTIONS.TOGGLE_TODO, payload})
      }
    
    const handleDelete = (id) => {
      dispatch({type: ACTIONS.DELETE_TODO, payload: id})
    }

    const getFilteredTodos = () => {
      return todoState.todos.filter((todo) => {
        return todo.name.toLowerCase().includes(todoState.todoFilter.toLowerCase())
      })
    }

    return (
        <ul>
            {getFilteredTodos().map((todo) => {
              return (
                <li onClick={() => {handleClick(todo.id, !todo.done)}} key={todo.id}>{todo.name} {todo.done ? 'DONE' : 'NOT DONE'} 
                    <button onClick={() => {handleDelete(todo.id)}}>DELETE</button>
                </li>
              );
            })}
      </ul>
    );
};

export default TodoList;