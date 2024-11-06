import React, { useState } from "react";

function App(){
  const [a, setA] = useState(10)

  const incrementA = ()=>{
    setA(a+10)
  }

  const decrementA = ()=>{
    setA(a-10)
  }

  return (
    <div>
      <h1>the value of a is {a}</h1>
      <button onClick={incrementA}>increment a</button>
      <button onClick={decrementA}>decrement a</button>
    </div>
  )
}

export default App;