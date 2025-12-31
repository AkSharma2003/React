import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "../Componants/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    userName:"Ankit Kumar Sharma",
    age:"21"
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-3xl p-5">Talwind Test</h1>
      <Card name="Ankit" btntext="click me"/>
      <Card name="cho" btntext="visit me"/>
    </>
  );
}

export default App;
