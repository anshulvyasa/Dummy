import { useContext, useState } from "react";

import "./App.css";
import { Kush } from "./context";

function App() {
  const [count, setCount] = useState(0);
  const { Obj } = useContext(Kush);

  function handler(){
     Obj.setValue(Obj.value+1)
  }

  return <>
  {Obj.value}
  <div></div>
  <button onClick={handler}>Click Me </button>
  </>;
}

export default App;
