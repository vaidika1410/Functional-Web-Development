import { useState } from 'react'
import Navbar from './components/Navbar'
import Elements from './components/Elements';
import './App.css'

function App() {
  let a = 10;

  return <>
  <div>
    <Navbar a = {a}/>
    <div className="banner">
    </div>
    <Elements />
  </div>
  </>
}

export default App
