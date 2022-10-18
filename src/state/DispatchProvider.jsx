import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const DispatchContext = createContext(() => {});
export const TodoContext = createContext([]);

const ReduxProvider = ({children}) => {
    const [todos, dispatch] = useReducer(reducer, initialState)

    return (
        <DispatchContext.Provider value={dispatch}>
            <TodoContext.Provider value={todos}>
                {children}
            </TodoContext.Provider>
        </DispatchContext.Provider>
    );
};

export default ReduxProvider;