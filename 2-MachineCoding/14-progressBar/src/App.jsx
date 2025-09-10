import { useState } from "react";
import "./App.css";
import ProgressBar from "./component/ProgressBar";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
     {toggle && <ProgressBar />} 
      <button onClick={()=> setToggle(!toggle)}>{toggle? "OFF": "ON"}</button>
    </>
  );
}

export default App;
