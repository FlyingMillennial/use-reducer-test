export const ACTIONS = {
    ADD_TODO: 'add_todo',
    PERSIST_TODO_SUCCESS: 'persist_todo_success',
    PERSIST_TODO_FAILURE: 'persist_todo_failure',
    DELETE_TODO: 'delete_todo',
    TOGGLE_TODO: 'toggle_todo',
    UPDATE_FILTER: 'update_filter',
}

export const reducer = (todoState, action) => {
    switch(action.type) {

        case ACTIONS.PERSIST_TODO_SUCCESS:
            todoState.todos = [...todoState.todos, {name: action.payload, id: Date.now(), done: false}];
            todoState.error = "";
            return {...todoState};

        case ACTIONS.PERSIST_TODO_FAILURE:
            todoState.error = "Something went wrong!"
            return {...todoState};

        case ACTIONS.DELETE_TODO:
            todoState.todos = todoState.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
            return {...todoState};

        case ACTIONS.TOGGLE_TODO:
            todoState.todos = todoState.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.done = !todo.done
                }
                return todo;
            });
            return {...todoState};

        case ACTIONS.UPDATE_FILTER:
            todoState.todoFilter = action.payload;
            return {...todoState};

        case ACTIONS.ADD_TODO:
            persistTodo(action.payload.todoName, action.payload.dispatch);
            return todoState;

        default:
            return todoState;
    }
}

export const initialState = {
    todos: [{name: "Feed the dog", id: Date.now(), done: false}],
    todoFilter: "",
    error: ""
};

// Making a random network call to prove out this pattern
const persistTodo = (todoName, dispatch) => {
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({type: ACTIONS.PERSIST_TODO_SUCCESS, payload: todoName})
        })
        .catch((error) => {
            console.log(error);
            dispatch({type: ACTIONS.PERSIST_TODO_FAILURE})
        });
};
