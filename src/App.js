import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "./actions";

import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  console.log(isLogged);  
  console.log(counter);
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged ? <h2>Hello the counter is working</h2> : ""}
    </div>
  );
}

export default App;