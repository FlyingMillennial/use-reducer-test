export const ACTIONS = {
    ADD_TODO: 'add_todo',
    DELETE_TODO: 'delete_todo',
    TOGGLE_TODO: 'toggle_todo'
}

export const reducer = (todos, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, {name: action.payload, id: Date.now(), done: false}];
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => {
                return todo.id !== action.payload;
            });
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.done = !todo.done
                }
                return todo;
            });
    }
}

export const initialState = [
    {name: "Feed the dog", id: Date.now(), done: false}
];