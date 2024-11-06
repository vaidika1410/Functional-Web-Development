import React, { useState } from 'react'
import './App.css'

function App() {
  let [user, setName] = useState("Vaidika");
  const age = 20;
  console.log({user})

  const changeName = () => {
    setName("Gautam")
    console.log({user})
  }

  return (
   <div>
    <h1>hello {user}, {age}</h1>
    <button onClick={changeName}>change user</button>
   </div>
  )
}

export default App
