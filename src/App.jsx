import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const state = useSelector((state) => state.count);

  return (
    <div className="App">
      Hello React - Redux
      <h1>{state}</h1>
      <Counter />
    </div>
  );
}

export default App;
