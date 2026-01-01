import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0">
        <div className="bg-white flex flex-wrap justify-center rounded-3xl gap-4 px-2 py-2">
          <button
            onClick={()=>setcolor("red")}
            className="outline-none px-4 rounded-full text-white"
            style={{backgroundColor:"red"}}
          >
            Red
          </button>
          <button
            onClick={()=>setcolor("green")}
            className="outline-none px-4 rounded-full text-white"
          style={{backgroundColor:"Green"}}
          >
            Green
          </button>
          <button
            onClick={()=>setcolor("yellow")}
            className="outline-none px-4 rounded-full text-white"
            style={{backgroundColor:"yellow"}}
          >
            Yellow
          </button>
          <button
            onClick={()=>setcolor("lime")}
            className="outline-none px-4 rounded-full text-white"
            style={{backgroundColor:"lime"}}
          >
            Lime
          </button>
          <button
            onClick={()=>setcolor("blue")}
            className=" outline-none px-4 rounded-full text-white"
            style={{backgroundColor:"blue"}}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
