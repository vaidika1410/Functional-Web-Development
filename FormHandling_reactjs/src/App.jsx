import { useState } from 'react'
import React from 'react'

function App() {
  const [username, setUsername] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(username)

    setUsername('')
  }

  return (
    <>
      <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input 
          value={username} 
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          type="text" name="name" placeholder="Enter your name" />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  )
}

export default App
