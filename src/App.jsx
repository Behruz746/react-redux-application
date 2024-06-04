import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import "./index.scss";

function App() {
  const state = useSelector((state) => state.count);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Create counter with react redux-tookit</h1>
        <h1 className="count">{state}</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
