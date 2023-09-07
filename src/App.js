import { useState } from "react";
import "./App.css";

function App() {
  const [color , setColor]= useState("lightgrey");

  return (
    <div className="App">
      <div
        style={{
          height: 500,
          width: 500,
          backgroundColor: color,
          marginTop: 100,
          marginLeft: 450,
          borderRadius: 10,
        }}
      ></div>
      <div
        style={{
          marginTop: 10,
          marginLeft: 450,
          backgroundColor: "lightblue",
          borderRadius: 10,
          width: 500,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            height: 30,
            borderRadius: 10,
            color: "white",
            fontWeight: 300,
          }}
          onClick={()=>setColor('red')}
        >
          Red
        </button>
         <button
          style={{
            backgroundColor: "green",
            height: 30,
            borderRadius: 10,
            color: "white",
            fontWeight: 300,
          }}
          onClick={()=>setColor('green')}

        >
          Green
        </button>
         <button
          style={{
            backgroundColor: "Yellow",
            height: 30,
            borderRadius: 10,
            color: "black",
            fontWeight: 300,
          }}
          onClick={()=>setColor('yellow')}

        >
          Yellow
        </button>
         <button
          style={{
            backgroundColor: "blue",
            height: 30,
            borderRadius: 10,
            color: "white",
            fontWeight: 300,
          }}
          onClick={()=>setColor('blue')}

        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
