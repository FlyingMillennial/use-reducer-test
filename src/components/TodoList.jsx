import React, { useContext } from 'react';
import { DispatchContext, TodoContext } from "../state/DispatchProvider";
import { ACTIONS } from "../state/reducer"

const TodoList = () => {
    const todos = useContext(TodoContext);
    const dispatch = useContext(DispatchContext);

    const handleClick = (id) => {
        dispatch({type: ACTIONS.TOGGLE_TODO, payload: id})
      }
    
      const handleDelete = (id) => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: id})
      }

    return (
        <ul>
            {todos.map((todo) => {
            return (<li onClick={() => {handleClick(todo.id)}} key={todo.id}>{todo.name} {todo.done ? 'DONE' : 'NOT DONE'} 
                    <button onClick={() => {handleDelete(todo.id)}}>DELETE</button></li>);
            })}
      </ul>
    );
};

export default TodoList;