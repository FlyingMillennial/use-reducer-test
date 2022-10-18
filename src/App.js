import { useReducer, useState } from "react"
import NestedComponentOne from "./components/NestedComponentOne";
import ReduxProvider from "./state/DispatchProvider";
import { initialState, ACTIONS, reducer } from "./state/reducer"

function App() {

  const [todos, dispatch] = useReducer(reducer, initialState)

  return (
    <ReduxProvider>
      <NestedComponentOne />
    </ReduxProvider>
  )

}

export default App;
