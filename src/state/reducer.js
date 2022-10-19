export const ACTIONS = {
    ADD_TODO: 'add_todo',
    DELETE_TODO: 'delete_todo',
    TOGGLE_TODO: 'toggle_todo',
    UPDATE_FILTER: 'update_filter'
}

export const reducer = (todoState, action) => {
    switch(action.type) {

        case ACTIONS.ADD_TODO:
            todoState.todos = [...todoState.todos, {name: action.payload, id: Date.now(), done: false}];
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

        default:
            return todoState;
    }
}

export const initialState = {
    todos: [{name: "Feed the dog", id: Date.now(), done: false}],
    todoFilter: ""
};