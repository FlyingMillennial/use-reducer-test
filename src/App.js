import NestedComponentOne from "./components/NestedComponentOne";
import ReduxProvider from "./state/DispatchProvider";

function App() {

  return (
    <ReduxProvider>
      <NestedComponentOne />
    </ReduxProvider>
  )

}

export default App;
